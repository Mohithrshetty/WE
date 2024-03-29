const handleSignup = async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  const data = {
    name,
    email,
    password,
    phoneNumber,
  };

  try {
    const response = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const parsedData = await response.json();
    alert(parsedData.message);
  } catch (error) {
    alert(error);
  }
};

const handleLogin = async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const data = {
    email,
    password,
  };

  try {
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const parsedData = await response.json();
    alert(parsedData.message);
  } catch (error) {
    alert(error);
  }
};
