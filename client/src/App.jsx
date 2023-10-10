// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn.jsx';
import EntryForm from './EntryForm.jsx';
// import Entry from './Entry.jsx';
import EntryView from './EntryView.jsx';
import EntriesList from './EntriesList.jsx';
import GophrLogo from './GophrLogo.jsx';
import './App.css';

export default function App() {
  return (
    <div>
      <GophrLogo />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/list" element={<EntriesList />} />
        <Route path="create-entry" element={<EntryForm />} />
        <Route path="/update-entry" element={<EntryForm />} />
        <Route path="/entries/:entryId" element={<EntryView />} />
      </Routes>
    </div>
  );
}
