//Onclick play video
$(document).ready(function() {
  $("#video-button").on("click", () => {
    $(".video-section").prepend(
      '<iframe src="https://www.youtube.com/embed/Ldjmb15Jsx0?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=Ldjmb15Jsx0" frameborder="0" allowfullscreen></iframe>'
    );
    $(".video-section__content").hide();
  });

  //Get Info from db
  fetch("../db/test.json")
    .then(res => res.json())
    .then(data =>
      data.map(item => {
        //Inserting data into html element
        let element = createElement(item);
        // Appending this new element into card-section
        $(".card-section").append(element);
      })
    )
    .catch(err => console.log(err));

  //Create Card Info ELement
  function createElement(object) {
    //Header Element
    $carCard = $("<div>").addClass("car-card");
    $header = $("<div>").addClass("car-card__header");
    $carName = $("<h4>").text(object.Name);
    $carPrice = $("<div>")
      .addClass("price")
      .text(object.Price);
    //Body Element
    $body = $("<div>").addClass("car-card__body");
    $imageDiv = $("<div>").addClass("car-image");
    $img = $("<img>")
      .attr("src", object.Photo)
      .attr("alt", object.Name);
    $image = $imageDiv.append($img);
    //Infotable  main div
    $infoTable = $("<div>").addClass("info-table");
    //Retailer
    $row = $("<div>").addClass("row");
    $leftInfo = $("<div>")
      .addClass("left-info")
      .text("Retailer");
    $rightInfo = $("<div>")
      .addClass("right-info")
      .text(object.Retailer);
    $retailer = $row.append($leftInfo).append($rightInfo);
    //Kilometers
    $row = $("<div>").addClass("row");
    $leftInfo = $("<div>")
      .addClass("left-info")
      .text("Kilometers");
    $rightInfo = $("<div>")
      .addClass("right-info")
      .text(object.Kilometres);
    $kilometers = $row.append($leftInfo).append($rightInfo);
    //Transmission
    $row = $("<div>").addClass("row");
    $leftInfo = $("<div>")
      .addClass("left-info")
      .text("Transmission");
    $rightInfo = $("<div>")
      .addClass("right-info")
      .text(object.Transmission);
    $transmission = $row.append($leftInfo).append($rightInfo);
    //Exterior
    $row = $("<div>").addClass("row");
    $leftInfo = $("<div>")
      .addClass("left-info")
      .text("Exterior");
    $rightInfo = $("<div>")
      .addClass("right-info")
      .text(object.Exterior);
    $exterior = $row.append($leftInfo).append($rightInfo);
    //Interior
    $row = $("<div>").addClass("row");
    $leftInfo = $("<div>")
      .addClass("left-info")
      .text("Transmission");
    $rightInfo = $("<div>")
      .addClass("right-info")
      .text(object.Interior);
    $interior = $row.append($leftInfo).append($rightInfo);
    //Vin
    $row = $("<div>").addClass("row");
    $leftInfo = $("<div>")
      .addClass("left-info")
      .text("VIN");
    $rightInfo = $("<div>")
      .addClass("right-info")
      .text(object.VIN);
    $vin = $row.append($leftInfo).append($rightInfo);
    //Drive train
    $row = $("<div>").addClass("row");
    $leftInfo = $("<div>")
      .addClass("left-info")
      .text("DriveTrain");
    $rightInfo = $("<div>")
      .addClass("right-info")
      .text(object.DriveTrain);
    $driveTrain = $row.append($leftInfo).append($rightInfo);
    //Info Table
    $infoTable = $infoTable
      .append($retailer)
      .append($kilometers)
      .append($transmission)
      .append($exterior)
      .append($interior)
      .append($vin)
      .append($driveTrain);
    //Footer element
    $footer = $("<div>").addClass("car-card__footer");
    $viewDetail = $("<div>")
      .addClass("btn")
      .text("VIEW DETAILS");
    $book = $("<div>")
      .addClass("btn")
      .text("BOOK A TEST DRIVE");

    $header = $header.append($carName).append($carPrice);
    $body = $body.append($image).append($infoTable);
    $footer = $footer.append($viewDetail).append($book);
    $cardElement = $carCard
      .append($header)
      .append($body)
      .append($footer);

    return $cardElement;
  }
});
