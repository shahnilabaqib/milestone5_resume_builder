window.addEventListener("load", () => {
  
  let name = localStorage.getItem("name");
  let desig = localStorage.getItem("desig");
  let Phone = localStorage.getItem("Phone");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("add");
  let pass1 = localStorage.getItem("pass1");
  let deg = localStorage.getItem("deg");
  let uni = localStorage.getItem("uni");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let lang = localStorage.getItem("lang");
  let lang2 = localStorage.getItem("lang2");
  let styear = localStorage.getItem("styear");
  let endyear = localStorage.getItem("endyear");
  let company = localStorage.getItem("company");
  let comlocation = localStorage.getItem("comlocation");
  let jobTitle = localStorage.getItem("jobTitle");
  let achv1 = localStorage.getItem("achv1");
  let achv2 = localStorage.getItem("achv2");
  let achv3 = localStorage.getItem("achv3");


  let resName: any = document.getElementById('resName')
      resName.textContent = name

  let resDesig: any = document.getElementById('resDesig')
      resDesig.textContent = desig

  let resPhone: any = document.getElementById('resPhone')
      resPhone.textContent = Phone

  let resEmail: any = document.getElementById('resEmail')
      resEmail.textContent = email

  let resAdd: any = document.getElementById('resAdd')
      resAdd.textContent = add

      let resPass: any = document.getElementById('resPass')
      resPass.textContent = pass1

      let resDeg: any = document.getElementById('resDeg')
      resDeg.textContent = deg
      
      let resIns: any = document.getElementById('resIns')
      resIns.textContent = uni

      let resPass2: any = document.getElementById('resPass2')
      resPass2.textContent = pass2
     
      let resDeg2: any = document.getElementById('resDeg2')
      resDeg2.textContent = deg2
   
      let resIns2: any = document.getElementById('resIns2')
      resIns2.textContent = uni2
});

































//-------------- exp section ---------------------
let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});
