import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import EntryForm from './EntryForm.jsx';
import EntryView from './EntryView.jsx';
import EntriesList from './EntriesList.jsx';
import ForgottenPassword from './ForgottenPassword.jsx';
import GuestFeed from './GuestFeed.jsx';
import NavBar from './NavBar.jsx';
import TechStack from './TechStack.jsx';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/list" element={<EntriesList />} />
        <Route path="create-entry" element={<EntryForm />} />
        <Route path="/update-entry/:entryId" element={<EntryForm />} />
        <Route path="/entries/:entryId" element={<EntryView />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/guest-feed" element={<GuestFeed />} />
        <Route path="/tech-stack" element={<TechStack />} />
      </Routes>
    </div>
  );
}
