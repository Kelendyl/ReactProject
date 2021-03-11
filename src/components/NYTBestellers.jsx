import React, {useMemo, useState, useEffect} from 'react';
import axios from 'axios';

const Data = () => {
  const [data, setData] = useState([]);
  const categories = useMemo(() => data, [data]);

  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=i6DtYl8mwHGEClT8sg2mJdnTKbQDRjPA')
    .then(resp => {
      setData(resp.data.results);
    });
  }, []);

    console.log(categories);

  const Sort = () => {
      let sorted = [...categories];
    sorted.sort(function(a, b){
        if(a.display_name < b.display_name) { return -1; }
        if(a.display_name > b.display_name) { return 1; }
        return 0;
    })
    console.log(sorted);
      setData(sorted);
  }
  
  const Search = () => {

  }

  return (
      <>

        <div>
            <table className="table">
            <thead>
            <tr>
            <th>
                List Name   
                <button type="button" class="btn btn-dark" onClick={Sort} >
                    Sort alphabetically
                </button>
            </th>
            <th>Newest publish date</th>
            <th>Updated</th>
            <th>
            <input 
        onChange = {Search}
         placeholder={"Search List Name"}
        />
            </th>
            </tr>
            </thead>

            <tbody>

            {categories.map((category, i) =>               
                {                 
                    const {list_name, display_name, newest_published_date, updated} = category
                    return(   
                            <tr key={list_name}> 
                            <td>{display_name}</td>
                            <td>{newest_published_date}</td>
                            <td>{updated}</td>
                            </tr>
                    )
                })}               
                
            </tbody>
            </table>
        </div>        
    </>
    );
}

  export default Data;