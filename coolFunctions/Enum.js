export default function Enum(members){
    members.forEach((member,index)=>{
        this[member]=member;
        this[index]=member
    })
    }