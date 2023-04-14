import { ISearch } from "./ISearch";

export default function SearchForm({ ...props }: ISearch) {
  console.log(props);
  return (
    <div className="search-form-container">
      <div className="search-form-body">
        <span className="icon medium search"></span>
        <input className="search-label" placeholder={props.label}></input>
      </div>
    </div>
  )
}
