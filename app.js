import {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from './firebase.js';

const studentList = document.getElementById('studentList');

window.themSinhVien = async function () {

    const masv = document.getElementById('masv').value;
    const hoten = document.getElementById('hoten').value;
    const lop = document.getElementById('lop').value;
    const email = document.getElementById('email').value;

    await addDoc(collection(db, 'sinhvien'), {
        masv,
        hoten,
        lop,
        email
    });

    alert('Thêm thành công');

    location.reload();
}

async function loadSinhVien() {

    studentList.innerHTML = '';

    const querySnapshot = await getDocs(collection(db, 'sinhvien'));

    querySnapshot.forEach((docItem) => {

        const data = docItem.data();

        studentList.innerHTML += `
            <tr>
                <td>${data.masv}</td>
                <td>${data.hoten}</td>
                <td>${data.lop}</td>
                <td>${data.email}</td>
                <td>
                    <button onclick="xoaSinhVien('${docItem.id}')">
                    Xóa
                    </button>
                </td>
            </tr>
        `;
    });
}

window.xoaSinhVien = async function(id) {

    await deleteDoc(doc(db, 'sinhvien', id));

    alert('Đã xóa');

    location.reload();
}

loadSinhVien();