function validationForm() {
    var name = document.getElementById("name").value;
    var studentid = document.getElementById("studentid").value;
    var emailid = document.getElementById("emailid").value;
    var contactno = document.getElementById("contactno").value;

    if (!name) {
        alert("Name is required");
        return false;
    }
    if (!studentid) {
        alert("StudentId is required");
        return false;
    }
    if (!emailid) {
        alert("EmailId is required");
        return false;
    }
    if (!contactno) {
        alert("ContactNo is required");
        return false;
    }
    return true;
}

function showData() {
    var userList;
    if (localStorage.getItem('userList') == null) {
        userList = [];
    } else {
        userList = JSON.parse(localStorage.getItem('userList'));
    }
    var html = "";
    userList.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.studentid + "</td>";
        html += "<td>" + element.emailid + "</td>";
        html += "<td>" + element.contactno + "</td>";
        html += `<td>
        <button class="btn btn-danger" id="update" onclick="deleteData(${index})">
        Delete
        </button>
         <button class="btn btn-warning m-2" id="update" onclick="updateData(${index})">
        Edit
        </button>  
        </td>`;
        html += "</tr>";


    });
    document.querySelector("#crudtable tbody").innerHTML = html;
}

document.onload = showData();



function AddData() {
    if (validationForm() == true) {
        var name = document.getElementById("name").value;
        var studentid = document.getElementById("studentid").value;
        var emailid = document.getElementById("emailid").value;
        var contactno = document.getElementById("contactno").value;
        var userList;
        if (localStorage.getItem('userList') == null) {
            userList = [];
        } else {
            userList = JSON.parse(localStorage.getItem('userList'));
        }
        userList.push({
            name: name,
            studentid: studentid,
            emailid: emailid,
            contactno: contactno,
        });
        localStorage.setItem('userList', JSON.stringify(userList))
        showData();
        document.getElementById("name").value = "";
        document.getElementById("studentid").value = "";
        document.getElementById("emailid").value = "";
        document.getElementById("contactno").value = "";
    }
}

function deleteData(index) {
    var userList;
    if (localStorage.getItem('userList') == null) {
        userList = [];
    } else {
        userList = JSON.parse(localStorage.getItem('userList'));
    }
    userList.splice(index, 1);
    localStorage.setItem('userList', JSON.stringify(userList))
    showData();
}

function updateData(index) {
    document.getElementById("submit").style.display = 'none';
    document.getElementById("update").style.display = 'block';

    var userList;
    if (localStorage.getItem('userList') == null) {
        userList = [];
    } else {
        userList = JSON.parse(localStorage.getItem('userList'));
    }

    document.getElementById("name").value = userList[index].name;
    document.getElementById("studentid").value = userList[index].studentid;
    document.getElementById("emailid").value = userList[index].emailid;
    document.getElementById("contactno").value = userList[index].contactno;


    document.querySelector("#update").onclick = function () {
        userList[index].name = document.getElementById("name").value;
        userList[index].studentid = document.getElementById("studentid").value;
        userList[index].emailid = document.getElementById("emailid").value;
        userList[index].contactno = document.getElementById("contactno").value;


        localStorage.setItem('userList', JSON.stringify(userList))
        showData();

        document.getElementById("submit").style.display = 'block';
        document.getElementById("update").style.display = 'none';
        document.getElementById("name").value = "";
        document.getElementById("studentid").value = "";
        document.getElementById("emailid").value = "";
        document.getElementById("contactno").value = "";

    }



}