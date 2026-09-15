const regions = [
  { id: "jeju", name: "제주시", count: 34, x: 43, y: 26, sub: [{name:"애월읍",count:12,x:28,y:37},{name:"한림읍",count:8,x:17,y:48},{name:"조천읍",count:7,x:58,y:33},{name:"구좌읍",count:7,x:73,y:35}] },
  { id: "seogwipo", name: "서귀포시", count: 29, x: 52, y: 67, sub: [{name:"중문동",count:9,x:40,y:60},{name:"안덕면",count:8,x:25,y:62},{name:"대천동",count:6,x:49,y:70},{name:"효돈동",count:6,x:61,y:63}] },
  { id: "aewol", name: "애월·한림", count: 22, x: 19, y: 43, sub: [{name:"애월해안",count:9,x:18,y:36},{name:"곽지리",count:6,x:25,y:46},{name:"협재리",count:4,x:14,y:55},{name:"금능리",count:3,x:22,y:61}] },
  { id: "seongsan", name: "성산·구좌", count: 18, x: 82, y: 43, sub: [{name:"성산읍",count:8,x:83,y:43},{name:"표선면",count:4,x:76,y:59},{name:"세화리",count:3,x:74,y:34},{name:"종달리",count:3,x:88,y:35}] },
  { id: "andeok", name: "안덕·대정", count: 15, x: 23, y: 66, sub: [{name:"안덕면",count:6,x:27,y:60},{name:"대정읍",count:5,x:15,y:66},{name:"모슬포",count:3,x:19,y:73},{name:"사계리",count:1,x:32,y:71}] },
  { id: "pyoseon", name: "표선·남원", count: 10, x: 75, y: 67, sub: [{name:"표선면",count:4,x:81,y:60},{name:"남원읍",count:3,x:69,y:67},{name:"위미리",count:2,x:62,y:72},{name:"신흥리",count:1,x:76,y:74}] }
];

const restaurantSeeds = [
  ["aewol","애월읍","애월 노을식탁","흑돼지",4.8,127,"노을 지는 바다를 보며 즐기는 두툼한 제주 흑돼지 근고기."],
  ["jeju","제주시","동문 고기국수","국수",4.7,94,"진한 사골 육수와 부드러운 돔베고기가 든 제주식 고기국수."],
  ["seongsan","성산읍","성산 해녀의집","해산물",4.9,218,"해녀가 당일 채취한 전복과 소라를 담은 신선한 한 상."],
  ["seogwipo","서귀동","서귀포 오는정원","카페",4.6,81,"감귤밭 안 작은 정원에서 즐기는 산뜻한 귤 디저트."],
  ["andeok","안덕면","산방산 보말칼국수","국수",4.8,156,"제주 보말을 아낌없이 넣어 바다 향이 진한 칼국수."],
  ["pyoseon","표선면","표선 바당회관","해산물",4.7,73,"표선 바다 앞에서 맛보는 제철 회와 해물뚝배기."],
  ["jeju","조천읍","함덕 돌담구이","흑돼지",4.5,68,"돌담집 분위기에서 즐기는 멜젓 흑돼지 구이."],
  ["seogwipo","중문동","중문 귤꽃다방","카페",4.6,104,"감귤 크림과 구움과자가 인기인 포근한 로컬 카페."],
  ["aewol","한림읍","협재 파도식당","해산물",4.8,132,"협재 바다가 보이는 자리에서 먹는 딱새우와 갈치조림."],
  ["seongsan","구좌읍","구좌 당근부엌","카페",4.7,89,"구좌 당근으로 만든 케이크와 주스가 산뜻한 카페."],
  ["andeok","대정읍","모슬포 방어상회","해산물",4.9,201,"제철 대방어를 두툼하게 내는 모슬포 현지인 단골집."],
  ["pyoseon","남원읍","남원 국수바당","국수",4.6,62,"담백한 멸치 육수와 수육을 곁들인 동네 국숫집."]
];

const reviews = [
  ["귤러버","2026. 09. 14","고기가 정말 두툼하고 멜젓도 짜지 않아 좋았어요. 창가 자리에서 본 노을은 덤!"],
  ["제주한달살이","2026. 09. 11","직원분이 굽기 좋게 손질해 주셔서 편하게 먹었습니다. 재방문하고 싶어요."],
  ["돌하르방","2026. 09. 07","기본 찬이 깔끔하고 특히 파채가 고기랑 잘 어울렸습니다."],
  ["바람소리","2026. 08. 30","주말 저녁엔 대기가 있었지만 회전이 빨랐어요. 목살이 특히 맛있었습니다."],
  ["오름탐험대","2026. 08. 24","애월 산책 뒤 들르기 좋은 위치예요. 2인 세트 양도 넉넉합니다."],
  ["해녀의부엌","2026. 08. 18","식사 끝에 나오는 볶음밥까지 꼭 드세요. 감귤 소스도 독특했어요."],
  ["제주여행자","2026. 08. 03","예약하고 가니 창가 자리를 안내받았습니다. 가족 모두 만족했어요."]
];

const restaurants = restaurantSeeds.map((r, index) => ({ id: `r${index+1}`, region:r[0], area:r[1], name:r[2], category:r[3], rating:r[4], reviewCount:r[5], description:r[6] }));
const state = { region: null, category: "전체", selected: null, showAllReviews: false, stamps: new Set(JSON.parse(localStorage.getItem("jeju-stamps") || "[]")) };

const $ = (selector) => document.querySelector(selector);
const regionButtons = $("#regionButtons");
const subregionButtons = $("#subregionButtons");

function renderMap() {
  regionButtons.innerHTML = regions.map(region => `<button class="region-pin ${state.region === region.id ? "active" : ""}" data-region="${region.id}" style="left:${region.x}%;top:${region.y}%" aria-label="${region.name}, 맛집 ${region.count}곳"><span>${region.name}</span><strong>${region.count}</strong></button>`).join("");
  const selected = regions.find(region => region.id === state.region);
  subregionButtons.innerHTML = selected ? selected.sub.map((sub, i) => `<button class="subregion-pin" style="left:${sub.x}%;top:${sub.y}%;animation-delay:${i*45}ms" data-subregion="${sub.name}" aria-label="${sub.name}, 맛집 ${sub.count}곳"><span>${sub.name}</span><strong>${sub.count}</strong></button>`).join("") : "";
  $("#mapStage").classList.toggle("zoomed", Boolean(selected));
  $("#resetMap").hidden = !selected;
  $("#mapTotal").innerHTML = selected ? `<span>선택 지역</span><strong>${selected.name} · ${selected.count}곳</strong>` : `<span>제주 전역</span><strong>맛집 128곳</strong>`;
  $("#mapGuide").textContent = selected ? `${selected.name}의 세부 지역을 누르거나 오른쪽 맛집을 살펴보세요.` : "궁금한 지역을 누르면 읍·면·동 맛집 수를 볼 수 있어요.";
}

function getVisibleRestaurants() {
  return restaurants.filter(r => (!state.region || r.region === state.region) && (state.category === "전체" || r.category === state.category));
}

function renderRestaurants() {
  const items = getVisibleRestaurants();
  const selectedRegion = regions.find(r => r.id === state.region);
  $("#areaLabel").textContent = selectedRegion ? selectedRegion.name : "제주 전체";
  $("#listTitle").textContent = selectedRegion ? `${selectedRegion.name}에서 찾은 맛집` : "지금 제주에서 사랑받는 맛집";
  $("#resultCount").textContent = `${items.length}곳`;
  $("#restaurantList").innerHTML = items.map(r => `<article class="restaurant-card">
    <button class="card-main" data-restaurant="${r.id}" type="button" aria-label="${r.name} 상세 보기">
      <div class="card-top"><span class="food-tag">${r.category}</span><span class="area-text">${r.area}</span></div>
      <h3>${r.name}</h3><p>${r.description}</p>
      <p class="rating"><span class="star">★</span> ${r.rating} · 후기 ${r.reviewCount}</p>
    </button>
    <button class="stamp-button ${state.stamps.has(r.id) ? "done" : ""}" data-stamp="${r.id}" type="button" aria-label="${r.name} 방문 ${state.stamps.has(r.id) ? "완료 취소" : "완료 체크"}" aria-pressed="${state.stamps.has(r.id)}">${state.stamps.has(r.id) ? "✓" : "○"}</button>
  </article>`).join("");
  $("#emptyState").hidden = items.length > 0;
  updateProgress();
}

function selectRegion(id) {
  state.region = id;
  renderMap(); renderRestaurants();
  if (window.innerWidth <= 960) $("#listTitle").scrollIntoView({behavior:"smooth", block:"start"});
}

function toggleStamp(id) {
  if (state.stamps.has(id)) { state.stamps.delete(id); showToast("도장깨기에서 뺐어요"); }
  else { state.stamps.add(id); showToast("방문 도장을 찍었어요! 🍊"); }
  localStorage.setItem("jeju-stamps", JSON.stringify([...state.stamps]));
  renderRestaurants();
  if (state.selected?.id === id) $("#detailStamp").checked = state.stamps.has(id);
}

function updateProgress() {
  $("#stampCount").textContent = state.stamps.size;
  $("#progressFill").style.width = `${Math.min(100, state.stamps.size / restaurants.length * 100)}%`;
}

function openRestaurant(id) {
  const restaurant = restaurants.find(r => r.id === id);
  if (!restaurant) return;
  state.selected = restaurant; state.showAllReviews = false;
  $("#restaurantName").textContent = restaurant.name;
  $("#detailArea").textContent = restaurant.area;
  $("#detailCategory").textContent = restaurant.category;
  $("#detailMeta").textContent = `★ ${restaurant.rating} · 후기 ${restaurant.reviewCount}`;
  $("#detailDescription").textContent = restaurant.description;
  $("#reviewCount").textContent = restaurant.reviewCount;
  $("#detailStamp").checked = state.stamps.has(id);
  renderReviews();
  $("#sheetBackdrop").hidden = false;
  $("#detailSheet").classList.add("open");
  $("#detailSheet").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#closeSheet").focus();
}

function closeRestaurant() {
  $("#detailSheet").classList.remove("open");
  $("#detailSheet").setAttribute("aria-hidden", "true");
  $("#sheetBackdrop").hidden = true;
  document.body.style.overflow = "";
}

function renderReviews() {
  const visible = state.showAllReviews ? reviews : reviews.slice(0, 5);
  $("#reviewList").innerHTML = visible.map(review => `<article class="review-item"><div class="review-user"><strong>${review[0]}</strong><span>${review[1]}</span></div><p>${review[2]}</p></article>`).join("");
  $("#showMoreReviews").hidden = state.showAllReviews || reviews.length <= 5;
}

let toastTimer;
function showToast(message) {
  $("#toast").textContent = message; $("#toast").classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 1800);
}

regionButtons.addEventListener("click", e => { const button = e.target.closest("[data-region]"); if (button) selectRegion(button.dataset.region); });
subregionButtons.addEventListener("click", e => { const button = e.target.closest("[data-subregion]"); if (button) { $("#areaLabel").textContent = button.dataset.subregion; showToast(`${button.dataset.subregion} 맛집을 보여드릴게요`); if (window.innerWidth <= 960) $("#listTitle").scrollIntoView({behavior:"smooth"}); } });
$("#resetMap").addEventListener("click", () => selectRegion(null));
$("#restaurantList").addEventListener("click", e => { const stamp = e.target.closest("[data-stamp]"); const card = e.target.closest("[data-restaurant]"); if (stamp) toggleStamp(stamp.dataset.stamp); else if (card) openRestaurant(card.dataset.restaurant); });
document.querySelectorAll(".category").forEach(button => button.addEventListener("click", () => { document.querySelectorAll(".category").forEach(b => b.classList.remove("active")); button.classList.add("active"); state.category = button.dataset.category; renderRestaurants(); }));
$("#clearFilter").addEventListener("click", () => { state.category = "전체"; document.querySelectorAll(".category").forEach(b => b.classList.toggle("active", b.dataset.category === "전체")); renderRestaurants(); });
$("#closeSheet").addEventListener("click", closeRestaurant);
$("#sheetBackdrop").addEventListener("click", closeRestaurant);
$("#showMoreReviews").addEventListener("click", () => { state.showAllReviews = true; renderReviews(); });
$("#detailStamp").addEventListener("change", () => state.selected && toggleStamp(state.selected.id));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeRestaurant(); });

renderMap(); renderRestaurants();
