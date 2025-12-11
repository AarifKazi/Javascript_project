class Univercity{
    constructor(name){
        this.name=name
        this.departments=[]
        
    } 
    add_department=(department)=>{
        this.departments.push(department)
        console.log(`Univercity Name is : ${this.name} Add Department is : ${department} `);
     }
     removedata=(department)=>{
        const index=this.departments.indexOf(department);
        if(index !== -1){
            this.departments.splice(index,1);
            console.log(`Univercity Name is : ${this.name} Remove Deparment is : ${department} `);
        }
        else{
        console.log(`Univercity Name is : ${this.name} Department is : ${department} `);
        }
     }

     displaydata=()=>{
        console.log(`Univercity Name : ${this.name}`);
        if(this.departments.length === 0){
            console.log('No department available');
        }else{
            this.departments.forEach((department,index)=>{
            console.log(`${index + 1}.${department}`);
            })
        }
     }
}

const data=new Univercity("Kadi Sarva Vishvadhiyalaya")
data.add_department('Mathematic')
data.add_department('II')
data.add_department('Phyhicies')
data.displaydata()
data.removedata('Mathematic')
data.displaydata()