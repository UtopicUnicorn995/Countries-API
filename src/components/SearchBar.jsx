import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {GoSearch} from 'react-icons/go'
export default function SearchBar(){
    const regions = ["Africa", "America", "Asia", "Europe", "Oceana"]

    return(
        <form action="" className='d-flex justify-content-between align-items-center'>
            <div className="search-bar-container  d-flex">
            <button className='search-button border-0 ps-3 h-100'>
                <GoSearch size='18px'/>
            </button>
            <input type="text" className="border-0 search--bar fs-sm" placeholder='Search for a country...' />
            </div>
            <DropdownButton id="dropdown-basic-button" title="Filter by region"  >
                {
                    regions.map(region => {
                        return (<Dropdown.Item key={region}>{region}</Dropdown.Item>)
                    })
                }
    </DropdownButton>
        </form>
        
    )
}