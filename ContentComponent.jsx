import { useState } from "react";
function ContentComponent(){
    const [employees, setEmployees] = useState([{id:101,
          name:"John",
          dept:"IT",
          desg:"Manager"
        },
        {
          id:102,
          name:"Foo",
          dept:"Admin",
          desg:"Manager"
        },
        {
          id:103,
          name:"BAR",
          dept:"HR",
          desg:"ASST Manager"
        },
        {
          id:104,
          name:"Elle",
          dept:"IT",
          desg:"Developer"
        }]);
    const [employess,setAddEmployees] = useState([{id:101,
        name:"John",
        dept:"IT",
        desg:"Manager"
      },
      {
        id:102,
        name:"Foo",
        dept:"Admin",
        desg:"Manager"
      },
      {
        id:103,
        name:"BAR",
        dept:"HR",
        desg:"ASST Manager"
      },
      {
        id:104,
        name:"Elle",
        dept:"IT",
        desg:"Developer"
      }]);
    const arr = employees;
    const removeData = (id) => {
         const del = arr.filter(arr => id != arr.id);

        setEmployees(del);
        console.log(del);
        console.log(id);
        
        
    }

const addData = (id) => {
    const i = employees;
    const ins = i.filter(i => id == i.id);
    let k = i.push(ins[0]);
    setAddEmployees(k);
}

    return(<div className="content">
            <table className="table table-striped table-bordered">
            <thead><tr><th>Id</th><th>Name</th><th>Dept</th><th>Desg</th><th>Edit</th></tr></thead>
                <tbody>
                 
                {
                    employees.map((employee) => 
                    <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.dept}</td>
                    <td>{employee.desg}</td>
                    <td className=''>
                        
                        <button class="btn btn-secondary mx-3" onClick={() => addData(employee.id)}>Add</button>
                        <button class="btn btn-primary" onClick={() => removeData(employee.id)}>Delete</button>
                    </td>
                </tr>)
               }
               </tbody>
            </table></div>)
}
export default ContentComponent;