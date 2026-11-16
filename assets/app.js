const properties = [
  {type:"house",location:"Accra",purpose:"Sale",name:"Contemporary family home",area:"East Legon, Accra",details:"4 beds • 3 baths • House",price:"GH₵ 2,450,000",image:"image-one"},
  {type:"apartment",location:"Kumasi",purpose:"Rent",name:"Modern city apartment",area:"Ahodwo, Kumasi",details:"2 beds • 2 baths • Apartment",price:"GH₵ 6,500 / month",image:"image-two"},
  {type:"land",location:"Tema",purpose:"Sale",name:"Serviced residential plot",area:"Community 25, Tema",details:"Land • Residential plot",price:"GH₵ 280,000",image:"image-three"},
  {type:"apartment",location:"Accra",purpose:"Rent",name:"Bright executive apartment",area:"Airport Residential, Accra",details:"2 beds • 2 baths • Apartment",price:"GH₵ 9,000 / month",image:"image-four"},
  {type:"house",location:"Kumasi",purpose:"Sale",name:"Spacious family residence",area:"KNUST, Kumasi",details:"3 beds • 2 baths • House",price:"GH₵ 1,150,000",image:"image-five"},
  {type:"land",location:"Takoradi",purpose:"Sale",name:"Coastal development land",area:"Beach Road, Takoradi",details:"Land • Development plot",price:"GH₵ 195,000",image:"image-six"}
];

const grid = document.querySelector("#property-grid");
const count = document.querySelector("#listing-count");

function renderProperties(items) {
  count.textContent = `${items.length} ${items.length === 1 ? "property" : "properties"}`;
  if (!items.length) {
    grid.innerHTML = '<p class="empty-state">No matching sample properties. Try changing your filters.</p>';
    return;
  }
  grid.innerHTML = items.map(p => `
    <article class="property-card">
      <div class="property-image ${p.image}"><span class="tag ${p.purpose === "Rent" ? "rent" : ""}">For ${p.purpose.toLowerCase()}</span></div>
      <div class="property-info">
        <p class="location">${p.area}</p><h3>${p.name}</h3>
        <p class="details">${p.details}</p><strong>${p.price}</strong>
      </div>
    </article>`).join("");
}

document.querySelector("#search-form").addEventListener("submit", event => {
  event.preventDefault();
  const type = document.querySelector("#type-filter").value;
  const location = document.querySelector("#location-filter").value;
  const purpose = document.querySelector("#purpose-filter").value;
  renderProperties(properties.filter(p =>
    (type === "all" || p.type === type) &&
    (location === "all" || p.location === location) &&
    (purpose === "all" || p.purpose === purpose)
  ));
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelector("#contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Ghana Estates property enquiry");
  const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
  document.querySelector("#form-message").textContent = "Your email draft is ready to open in your email application.";
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
document.querySelector("#year").textContent = new Date().getFullYear();
