import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Entry from './Entry';
// import LinkComponent from './LinkComponent';

export default function EntriesList() {
  // const navigate = useNavigate();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        };

        const res = await fetch('/api/entries', req);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        console.log('data:', data);
        setEntries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // function handleSignOut() {
  //   sessionStorage.removeItem('token');
  //   navigate('/');
  // }

  const entriesList = []
    .concat(entries)
    .sort((a, b) => (a.entryId > b.entryId ? -1 : 1));

  return (
    <div>
      {/* <div className="flex justify-between mr-12">
        <LinkComponent
          to="/create-entry"
          placeholder="Create New Entry"
          className="text-indigo-500"
        />

        <LinkComponent
          onClick={handleSignOut}
          to="/"
          placeholder="Sign Out"
          className="text-rose-400"
        />
      </div> */}
      <div className="flex flex-col items-center justify-center">
        {entriesList.map((entry) => (
          <Entry key={entry.entryId} entry={entry} />
        ))}
      </div>
    </div>
  );
}
