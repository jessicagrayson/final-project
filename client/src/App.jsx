// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form.jsx';
import EntryForm from './EntryForm.jsx';
// import Entry from './Entry.jsx';
// import EntryView from './EntryView.jsx';
import EntriesList from './EntriesList.jsx';
// import GophrLogo from './GophrLogo.jsx';
import './App.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />}>
          <Route index element={<EntriesList />} />
          <Route path="register" element={<EntryForm />} />
        </Route>
      </Routes>
    </div>
  );
}
