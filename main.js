let empresa = document.getElementById("empresa");
      let profesional = document.getElementById("profesional");
      let buttonProfesional = document.getElementById("buttonProfesional");
      let buttonEmpresa = document.getElementById("buttonEmpresa");
      let header = document.getElementById("header");
      let fabs = document.getElementById("fabs");
      let fabToggle = document.getElementById("fabs-toggle")
      let navBar = document.getElementById("navbar")

      function func() {
        profesional.classList.toggle("escondido");
        // console.log(buttonEmpresa.innerHTML)
        if (buttonEmpresa.innerHTML == "Ver Mas") {
          buttonEmpresa.innerHTML = "Ver Menos";
        } else {
          buttonEmpresa.innerHTML = "Ver Mas";
        }
        // console.log(func);
      }

      function func2() {
        profesional.classList.toggle("full");
        if (buttonProfesional.innerHTML == "Ver Mas") {
          buttonProfesional.innerHTML = "Ver Menos";
        } else {
          buttonProfesional.innerHTML = "Ver Mas";
        }
        // empresa.classList.toggle("oscuro");
        // console.log(func2);
      }

      window.onscroll = function() {
        scrollFunction();
      };

      function scrollFunction() {
        if (document.documentElement.scrollTop > 10) {
          header.classList.add("inverted-color");
        } else if (document.documentElement.scrollTop < 10) {
          header.classList.remove("inverted-color");
          // document.getElementById("logo").style.fontSize = "35px";
        }
        // console.log(document.getElementById("header").style.background)
        // console.log('top: '  + (window.pageYOffset || document.documentElement.scrollTop))
      }

      function hideFabs() {
        // fabs.map(faB.classList.toggle("shown"))
        // for (var i = 0; i < fabs.length; i++) {
          fabs.classList.toggle("hidden");
          fabToggle.classList.toggle("up");
          console.log(fabToggle.className);
        // }
      }

      function showNavBar() {
        // if(screen.width <= 820px) {
        navBar.classList.toggle("desplegado")
        console.log(navBar.classList)
        // }
        // navToggle.click();
      }