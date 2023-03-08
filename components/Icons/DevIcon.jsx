const DevIcon = ({ iconName, name }) => {
  return (
    <li className="flex items-center" key={name}>
      <span className="text-gray-400">
        <i className={iconName}></i>
      </span>
      <span
        className="ml-2 text-gray-400 sm:text-sm text-xs"
        style={{ whiteSpace: "nowrap" }}
      >
        {name}
      </span>
    </li>
  );
};
export default DevIcon;
