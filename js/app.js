var app = new Vue({
  el: "#app",
  data: {
    selectedColor: { id: null },
    backendURL:"http://jelolo-backend.tk",
    bg: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    message: "Hello Vue!",
    colors: [
      {
        id: 1,
        name: "red",
        bg: "https://images.unsplash.com/photo-1482872376051-5ce74ebf0908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1550&q=80",
      },
      {
        id: 2,
        name: "green",
        bg: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 3,
        name: "blue",
        bg: "https://images.unsplash.com/photo-1581299327801-faeb40ea459e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80",
      }, 
    ],
  },
  computed: {
    selectedColorName() {
      if (this.selectedColor !== null) {
        return this.colors[this.selectedColor.id - 1].name;
      } else {
        return "#3a6df0";
      }
    },
  },
  methods: {
    selectColor(color) {
      document.getElementById("scale").innerHTML = ""
      this.selectedColor = color;
      this.doColors(color.name)
      console.log(color.color_background)
      this.changeColor(this.backendURL+color.color_background.url);
    },
    changeColor: function (bg) {
      document.getElementsByTagName("body")[0].classList.add("black");
      setTimeout(() => {
        document.getElementsByTagName("body")[0].style.backgroundImage =
          "url(" + bg + ")";
        document.getElementsByTagName("body")[0].classList.remove("black");
      }, 300);
    },
    changeDarkmode() {
      document.body.classList.toggle("light-mode");
    },
    getGradColors(from, to, numberOfShades){
      // generate a canvas context and store it in cache
      var ctx =  document.createElement('canvas').getContext('2d');
      // set our canvas dimensions according to the number of shades required
      var w = ctx.canvas.width = numberOfShades || 10;
      ctx.canvas.height = 1;
      // create a linear gradient
      // (to keep 'from' and 'to' values, we set its x to 1 and width to width -1) 
      var grad = ctx.createLinearGradient(1,0,w-1, 0);
      grad.addColorStop(0, from || 'white');
      grad.addColorStop(1, to || 'black');
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,w,1);   // draw it
      var data = ctx.getImageData(0,0,w,1); // get the pixels info ([r, g, b, a, r, g...])
      var colors = [];
      data.data.forEach(function(comp, i){
        if(i%4===0){ // map each pixel in its own array
          colors.push([]);
          }
        if(i%4===3){ // alpha
          comp /= 255;
          }
        colors[colors.length - 1].push(comp);
        });
      return colors.map(function(c){
        // return a CSS computed value
        ctx.fillStyle = 'rgba('+c.join()+')';
        return ctx.fillStyle;
        });
      },
      doColors(color){
        var shadesOfWhite = this.getGradColors(color, 'white', 30);
        shadesOfWhite.forEach(this.generateSpan);
      },
      generateSpan(color){
        var container = document.getElementById("scale");
        var span = document.createElement('span');
        span.style.backgroundColor = color;
        span.classList.add('color');
        container.appendChild(span);
      }
  },
  mounted() {
    this.changeColor(
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    ); 

    fetch(this.backendURL+"/colors")
      .then((response) => response.json())
      .then((data) => {
        this.colors = data
        // this.selectColor ( this.colors[0])
      });
  },
});

// $(function () {
//     $(".menu-link").click(function () {
//      $(".menu-link").removeClass("is-active");
//      $(this).addClass("is-active");
//     });
//    });

//    $(function () {
//     $(".main-header-link").click(function () {
//      $(".main-header-link").removeClass("is-active");
//      $(this).addClass("is-active");
//     });
//    });

//    const dropdowns = document.querySelectorAll(".dropdown");
//    dropdowns.forEach((dropdown) => {
//     dropdown.addEventListener("click", (e) => {
//      e.stopPropagation();
//      dropdowns.forEach((c) => c.classList.remove("is-active"));
//      dropdown.classList.add("is-active");
//     });
//    });

//    $(".search-bar input")
//     .focus(function () {
//      $(".header").addClass("wide");
//     })
//     .blur(function () {
//      $(".header").removeClass("wide");
//     });

//    $(document).click(function (e) {
//     var container = $(".status-button");
//     var dd = $(".dropdown");
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//      dd.removeClass("is-active");
//     }
//    });

//    $(function () {
//     $(".dropdown").on("click", function (e) {
//      $(".content-wrapper").addClass("overlay");
//      e.stopPropagation();
//     });
//     $(document).on("click", function (e) {
//      if ($(e.target).is(".dropdown") === false) {
//       $(".content-wrapper").removeClass("overlay");
//      }
//     });
//    });

//    $(function () {
//     $(".status-button:not(.open)").on("click", function (e) {
//      $(".overlay-app").addClass("is-active");
//     });
//     $(".pop-up .close").click(function () {
//      $(".overlay-app").removeClass("is-active");
//     });
//    });

//    $(".status-button:not(.open)").click(function () {
//     $(".pop-up").addClass("visible");
//    });

//    $(".pop-up .close").click(function () {
//     $(".pop-up").removeClass("visible");
//    });

//    const toggleButton = document.querySelector('.dark-light');

//    toggleButton.addEventListener('click', () => {
//      document.body.classList.toggle('light-mode');
//    });
