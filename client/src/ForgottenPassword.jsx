import LinkComponent from './LinkComponent';

export default function ForgottenPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h3>Yikes! This is awkward...</h3>
      <h3>This section is currently under construction</h3>
      <p className="text-xs">but it will be cool, we promise</p>
      <LinkComponent to="/" placeholder="Back" className="text-indigo-500" />
    </div>
  );
}
