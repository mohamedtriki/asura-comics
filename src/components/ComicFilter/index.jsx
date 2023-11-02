/* eslint-disable react/no-array-index-key */
const ComicFilter = ({
  title, filter, selected, setSelected
}) => {
  const selectFilter = (e) => setSelected(e.target.value);

  return (
    <div className="custom-dropdown dropdown-tranparent">
      <div className="dropdown">
        <select className="dropdown-toggle" value={selected} onChange={selectFilter}>
          <option value={0}>{title}</option>
          {Object.keys(filter).map((item, i) => (
            <option value={item} key={i} className="dropdown-item color-white text-capitalize">
              {filter[item]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ComicFilter;
