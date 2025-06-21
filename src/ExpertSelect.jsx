import { useEffect, useState } from "react";

const ExpertSelect=()=>{
    const [expertList,setExpertList] =useState([]);
    const [team,setTeam]=useState([]);
    
    useEffect(()=>{
        fetch('./experts.json')
        .then(res=>res.json())
        .then(data=>setExpertList(data))
    },[]);

    const AddToTeam=(person)=>{
        setTeam([...team,person])
    }
    const totalCost=team.reduce((salary,member)=>salary+member.salary,0);
    return(
        <div className="w-5/6 mx-auto flex gap-4 justify-around ">
            <div className="basis-3/4 grid grid-cols-3 gap-4">

            {expertList.map((person)=>(
                <div key={person.id} className="bg-gray-200 p-3 rounded-sm">
                    <div className="flex justify-center">
                        <div className="size-36 border rounded-full text-center" >
                            <img src={person.img} alt="profile_image" 
                            className="size-full object-contain rounded-full" />
                        </div>
                    </div>
                    <p className="text-xl">{person.name}</p>
                    <p><span className="font-bold">Age:</span> {person.age}</p>
                    <p><span className="font-bold">Designation</span> {person.designation}</p>
                    <p><span className="font-bold">Salary</span>{person.salary} $</p>
                    <button onClick={()=>AddToTeam(person)} 
                        className="m-5 px-3 py-2 bg-cyan-500">Add To Team</button>
                    <br />
                    <hr />
                </div>
            ))}
            </div>
            <div className="sticky top-0 right-0">
                <h2>Team: {team.length}</h2>
                <p>Total Cost: {totalCost}</p>
                <div>
                    {team.length>0? (
                        <div>
                            {team.map((member)=>(
                                <div key={member.id}>{member.name}</div>
                            ))}
                        </div>
                    ) : (
                        <div>No expert added</div>
                    )}
                </div>
                <button>Confirm List</button>
            </div>
        </div>
    );
};
export default ExpertSelect;