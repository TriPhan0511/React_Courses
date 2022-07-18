// class EasyHttp {
//   get(url) {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }

//   post(url, data) {
//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'applicatioon/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }

//   put(url, data) {
//     fetch(url, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }

//   delete(url) {
//     fetch(url, {
//       method: 'DELETE',
//     }).then(() => console.log('A use was deleted!'));
//   }
// }
// ---------------------------------------------------------------------------------------

// Use async / await
class EasyHttp {
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }

  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const newData = await res.json();

    console.log(newData);
  }

  async put(url, data) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const data2 = await res.json();
    console.log(data2);
  }

  async delete(url) {
    await fetch(url, {
      method: 'DELETE',
    });
    console.log('A user was deleted.');
  }
}

// Create an easyHttp instance
const http = new EasyHttp();

// Get data
http.get('https://jsonplaceholder.typicode.com/users');

// Get a specified user
// http.get('https://jsonplaceholder.typicode.com/users/1');

// Post Data
// const user = { name: 'Alex Ferguson', email: 'alex@gmail.com' };
// http.post('https://jsonplaceholder.typicode.com/users', user);

// Put Data (Update an user)
// const user = { name: 'Brad Pitt', email: 'bradpitt@gmail.com' };
// http.put('https://jsonplaceholder.typicode.com/users/1', user);

// Deelete Data
// http.delete('https://jsonplaceholder.typicode.com/users/1');
