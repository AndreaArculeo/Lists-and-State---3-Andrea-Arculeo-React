export default function Todo({ todos }) {
  return (
    <div className="flex">
      <li className="text-base">{todos} </li>
    </div>
  );
}
