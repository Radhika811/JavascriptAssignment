fetch( 'https://reqres.in/api/users' )
.then( (response)=> {
    return response.json();
})
.then( (data) => {
    const tableData = data.data;

    const tableBody= document.getElementById('table-body');

    tableData.forEach(element => {

        const tableRow=document.createElement("div");
        tableRow.className="table-row";

        const Id=document.createElement("div");
        Id.className="table-cell id";
        Id.innerHTML= element.id;
        console.log(element.id);

        const Name=document.createElement("div");
        Name.className="table-cell Name";
        Name.innerHTML=element.first_name+ " "+ element.last_name;

        const Email=document.createElement("div");
        Email.className="table-cell Email";
        Email.innerHTML=element.email;
        console.log(element.email);

        const Avatar=document.createElement("div");
        Avatar.className="table-cell Avatar";
        const image= document.createElement("img");
        image.src=element.avatar;
        Avatar.appendChild(image);
        

        tableRow.appendChild(Id);
        tableRow.appendChild(Name);
        tableRow.appendChild(Email);
        tableRow.appendChild(Avatar);
        
        tableBody.appendChild(tableRow);
    });

}).catch((err)=>{
    console.log(err);
});
