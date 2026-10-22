const detailContent = {
  bts: { icon: "💜", tag: "Profil grup", title: "Mengenal BTS", intro: "Mengenal BTS melalui musik, perjalanan, dan pesan dalam karya mereka.", body: ["BTS adalah grup musik Korea Selatan yang beranggotakan RM, Jin, SUGA, j-hope, Jimin, V, dan Jung Kook.", "BTS dikenal lewat musik, penampilan panggung, keterlibatan anggota dalam penulisan lagu, serta pesan tentang penerimaan diri dan pertumbuhan."] },
  txt: { icon: "⭐", tag: "Profil grup", title: "TXT dan Warna Musiknya", intro: "Mengenal TXT dan karya musik mereka.", body: ["TOMORROW X TOGETHER atau TXT beranggotakan Soobin, Yeonjun, Beomgyu, Taehyun, dan Hueningkai.", "Musik TXT mengeksplorasi beragam tema, termasuk masa muda, perubahan, persahabatan, dan pencarian jati diri."] },
  seventeen: { icon: "💎", tag: "Profil grup", title: "SEVENTEEN: Musik dan Panggung", intro: "Mengenal musik dan penampilan SEVENTEEN.", body: ["SEVENTEEN adalah grup yang dikenal lewat penampilan panggung energik dan keterlibatan anggotanya dalam proses kreatif.", "Grup ini memiliki unit hip-hop, vokal, dan performance yang bekerja bersama sebagai satu tim."] },
  enhypen: { icon: "🌙", tag: "Profil grup", title: "ENHYPEN: Kenali Lebih Dekat", intro: "Mengenal ENHYPEN melalui konsep dan karya musiknya.", body: ["ENHYPEN saat ini beranggotakan Jungwon, Jay, Jake, Sunghoon, Sunoo, dan Ni-ki.", "Grup ini dibentuk melalui program I-LAND dan debut pada November 2020."] },
  evan: { icon: "🎤", tag: "Solois", title: "EVAN: Perjalanan Musik Solo", intro: "Mengenal EVAN dan perjalanan musik solonya.", body: ["Halaman ini berisi catatan profil EVAN dan karya musik yang ingin kamu ikuti.", "Periksa pengumuman resmi artis atau agensinya untuk informasi terbaru tentang rilisan dan aktivitasnya."] },
  cortis: { icon: "🎧", tag: "Profil grup", title: "CORTIS: Kreativitas di Luar Garis", intro: "Mengenal CORTIS, grup di bawah BIGHIT MUSIC.", body: ["CORTIS adalah grup beranggotakan Martin, James, Juhoon, Seonghyeon, dan Keonho. Nama grup ini terinspirasi dari frasa Color Outside the Lines.", "Para member dikenal terlibat dalam proses kreatif seperti musik, koreografi, dan konten visual. Peran resmi masing-masing anggota dapat berubah atau tidak selalu ditetapkan secara tetap, jadi halaman ini tidak menganggap semua posisi sebagai posisi resmi."] }
};

// Data profil member
const memberProfiles = {
  bts: [
    ["RM", "Kim Nam-joon", "12 September 1994", "Leader, rapper", "Dikenal sebagai penulis lagu dan penggemar seni.", "bts-rm.jpg"],
    ["Jin", "Kim Seok-jin", "4 Desember 1992", "Vokalis", "Dikenal juga lewat julukan Worldwide Handsome dan humor yang khas.", "bts-jin.jpg"],
    ["SUGA", "Min Yoon-gi", "9 Maret 1993", "Rapper, produser", "Merilis karya solo dengan nama Agust D.", "bts-suga.jpg"],
    ["j-hope", "Jung Ho-seok", "18 Februari 1994", "Rapper, dancer", "Dikenal karena energi panggung dan kemampuan menarinya.", "bts-jhope.jpg"],
    ["Jimin", "Park Ji-min", "13 Oktober 1995", "Vokalis, dancer", "Dikenal dengan gaya menari yang ekspresif.", "bts-jimin.jpg"],
    ["V", "Kim Tae-hyung", "30 Desember 1995", "Vokalis", "Memiliki minat pada fotografi dan seni visual.", "bts-v.jpg"],
    ["Jung Kook", "Jeon Jung-kook", "1 September 1997", "Vokalis, dancer", "Dikenal sebagai performer serbabisa dan juga merilis musik solo.", "bts-jungkook.jpg"]
  ],
  txt: [
    ["Soobin", "Choi Soo-bin", "5 Desember 2000", "Leader, vokalis", "Dikenal dengan pembawaan yang tenang dan hangat.", "txt-soobin.jpg"],
    ["Yeonjun", "Choi Yeon-jun", "13 September 1999", "Rapper, dancer, vokalis", "Sering mendapat perhatian karena kemampuan menari dan gaya panggungnya.", "txt-yeonjun.jpg"],
    ["Beomgyu", "Choi Beom-gyu", "13 Maret 2001", "Vokalis", "Menyukai musik dan dapat memainkan gitar.", "txt-beomgyu.jpg"],
    ["Taehyun", "Kang Tae-hyun", "5 Februari 2002", "Vokalis", "Dikenal dengan vokal yang kuat dan ketertarikan pada sains.", "txt-taehyun.jpg"],
    ["Hueningkai", "Kai Kamal Huening", "14 Agustus 2002", "Vokalis, performer", "Tumbuh dalam lingkungan multikultural dan bisa memainkan beberapa alat musik.", "txt-hueningkai.jpg"]
  ],
  seventeen: [
    ["S.Coups", "Choi Seung-cheol", "8 Agustus 1995", "Leader, rapper", "Memimpin grup dan unit hip-hop.", "svt-scoups.jpg"],
    ["Jeonghan", "Yoon Jeong-han", "4 Oktober 1995", "Vokalis", "Dikenal dengan kepribadian jahil dan penuh perhatian.", "svt-jeonghan.jpg"],
    ["Joshua", "Hong Ji-soo", "30 Desember 1995", "Vokalis", "Lahir di Amerika Serikat dan dikenal mahir bermain gitar.", "svt-joshua.jpg"],
    ["Jun", "Wen Jun-hui", "10 Juni 1996", "Performer", "Memiliki pengalaman akting dan berasal dari Tiongkok.", "svt-jun.jpg"],
    ["Hoshi", "Kwon Soon-young", "15 Juni 1996", "Dancer, vokalis", "Berperan penting dalam koreografi dan unit performance.", "svt-hoshi.jpg"],
    ["Wonwoo", "Jeon Won-woo", "17 Juli 1996", "Rapper", "Menyukai permainan video dan fotografi.", "svt-wonwoo.jpg"],
    ["Woozi", "Lee Ji-hoon", "22 November 1996", "Vokalis, produser", "Terlibat dalam penulisan dan produksi banyak lagu grup.", "svt-woozi.jpg"],
    ["DK", "Lee Seok-min", "18 Februari 1997", "Vokalis", "Dikenal dengan suara kuat dan senyum cerah.", "svt-dk.jpg"],
    ["Mingyu", "Kim Min-gyu", "6 April 1997", "Rapper", "Juga dikenal tertarik pada fotografi dan memasak.", "svt-mingyu.jpg"],
    ["The8", "Xu Ming-hao", "7 November 1997", "Dancer", "Memiliki minat pada seni, tari, dan seni bela diri.", "svt-the8.jpg"],
    ["Seungkwan", "Boo Seung-kwan", "16 Januari 1998", "Vokalis", "Dikenal dengan kemampuan variety dan vokal yang khas.", "svt-seungkwan.jpg"],
    ["Vernon", "Chwe Hansol", "18 Februari 1998", "Rapper", "Tumbuh dalam lingkungan Korea-Amerika dan menyukai musik beragam genre.", "svt-vernon.jpg"],
    ["Dino", "Lee Chan", "11 Februari 1999", "Dancer, rapper", "Member termuda yang dikenal dengan kemampuan menarinya.", "svt-dino.jpg"]
  ],
  enhypen: [
    ["Jungwon", "Yang Jung-won", "9 Februari 2004", "Leader, vokalis", "Menjadi leader ENHYPEN sejak debut.", "enhypen-jungwon.jpg"],
    ["Jay", "Park Jong-seong", "20 April 2002", "Rapper, dancer", "Dikenal menyukai memasak dan dunia fashion.", "enhypen-jay.jpg"],
    ["Jake", "Sim Jae-yun", "15 November 2002", "Rapper, vokalis", "Tumbuh di Australia sebelum berkarier di Korea Selatan.", "enhypen-jake.jpg"],
    ["Sunghoon", "Park Sung-hoon", "8 Desember 2002", "Dancer, vokalis", "Pernah menekuni olahraga seluncur indah.", "enhypen-sunghoon.jpg"],
    ["Sunoo", "Kim Sun-oo", "24 Juni 2003", "Vokalis", "Dikenal dengan ekspresi cerah dan kepribadian yang ramah.", "enhypen-sunoo.jpg"],
    ["Ni-ki", "Nishimura Riki", "9 Desember 2005", "Dancer, performer", "Berasal dari Jepang dan dikenal dengan kemampuan menarinya.", "enhypen-niki.jpg"]
  ],
  evan: [
    ["EVAN", "Lee Hee-seung", "15 Oktober 2001", "Solois, vokalis", "Sebelumnya dikenal sebagai Heeseung dari ENHYPEN. Periksa sumber resmi untuk pembaruan aktivitas solo.", "evan.jpg"]
  ],
  cortis: [
    ["MARTIN", "Martin Edwards (nama Korea: Park Woo-joo)", "20 Maret 2008", "Leader", "Member CORTIS yang dikenal sebagai leader; ikut dalam proses kreatif grup.", "cortis-martin.jpg"],
    ["JAMES", "James Chao Yufan", "14 Oktober 2005", "Member; posisi resmi tidak dicantumkan", "Dikenal sebagai member tertua CORTIS dan terlibat dalam proses kreatif grup.", "cortis-james.jpg"],
    ["JUHOON", "Kim Ju-hoon", "3 Januari 2008", "Member; posisi resmi tidak dicantumkan", "Salah satu dari lima member CORTIS.", "cortis-juhoon.jpg"],
    ["SEONGHYEON", "Eom Seong-hyeon", "13 Januari 2009", "Member; posisi resmi tidak dicantumkan", "Terlibat dalam proses kreatif dan pengembangan karya grup.", "cortis-seonghyeon.jpg"],
    ["KEONHO", "An Keon-ho", "14 Februari 2009", "Member; maknae (termuda)", "Merupakan member termuda CORTIS.", "cortis-keonho.jpg"]
  ]
};

function renderMemberProfiles(topic) {
  const grid = document.getElementById("memberGrid");
  const heading = document.getElementById("memberHeading");
  if (!grid || !heading) return;
  const members = memberProfiles[topic] || [];
  heading.textContent = topic === "playlist" ? "Artis dalam Rekomendasi" : "Kenali Member";
  grid.replaceChildren();
  if (!members.length) {
    grid.innerHTML = "<p>Pilih profil grup untuk melihat daftar member.</p>";
    return;
  }
  members.forEach(member => {
    const [stageName, realName, birthday, role, fact, imageFile] = member;
    const card = document.createElement("article");
    card.className = "member-card";
    const photoWrap = document.createElement("div");
    photoWrap.className = "member-photo-wrap";
    const photo = document.createElement("img");
    photo.className = "member-photo";
    photo.src = "img/members/" + imageFile;
    photo.alt = "Foto " + stageName;
    photo.loading = "lazy";
    const fallback = document.createElement("div");
    fallback.className = "member-photo-fallback";
    fallback.textContent = "💜 " + stageName;
    photo.addEventListener("error", () => {
      photo.hidden = true;
      photoWrap.appendChild(fallback);
    }, { once: true });
    photoWrap.appendChild(photo);
    const info = document.createElement("div");
    info.className = "member-info";
    const name = document.createElement("h3");
    name.textContent = stageName;
    const details = [
      ["Nama asli", realName],
      ["Tanggal lahir", birthday],
      ["Posisi / peran", role],
      ["Fakta menarik", fact]
    ];
    info.appendChild(name);
    details.forEach(([label, value]) => {
      const line = document.createElement("p");
      line.className = "member-detail";
      const strong = document.createElement("strong");
      strong.textContent = label + ": ";
      line.append(strong, document.createTextNode(value));
      info.appendChild(line);
    });
    card.append(photoWrap, info);
    grid.appendChild(card);
  });
}

function showDetailArticle() {
  const title = document.getElementById("detailTitle");
  if (!title) return;
  const topic = new URLSearchParams(window.location.search).get("topik") || "seventeen";
  const article = detailContent[topic] || detailContent.seventeen;
  document.title = article.title + " | My Favorite K-Pop";
  document.getElementById("detailIcon").textContent = article.icon;
  document.getElementById("detailTag").textContent = article.tag;
  document.getElementById("detailTitle").textContent = article.title;
  document.getElementById("detailIntro").textContent = article.intro;
  const body = document.getElementById("detailBody");
  body.replaceChildren();
  article.body.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    body.appendChild(p);
  });
  renderMemberProfiles(topic);
}

function setupLoginForm() {
  const form = document.getElementById("loginForm");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("loginName").value.trim();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const notice = document.getElementById("loginNotice");
    if (name.length < 3 || !email.includes("@") || password.length < 8) {
      notice.textContent = "Periksa kembali username, email, dan password kamu.";
      notice.style.color = "#b42318";
      return;
    }
    notice.textContent = "Validasi berhasil! Welcome Guysssssss.";
    notice.style.color = "#287a45";
  });
}

const STORAGE_KEY = "myKpopDiaryPostsV2";
const defaultPosts = [
  { id: 1, group: "BTS", name: "purple_moon", text: "Lagu BTS apa yang paling sering kalian dengarkan akhir-akhir ini? 💜", comments: [{ name: "musiclover", text: "Aku suka mendengarkan Spring Day!" }] },
  { id: 2, group: "TXT", name: "starrymoa", text: "Kalau sedang butuh semangat, lagu TXT apa yang kalian rekomendasikan? ⭐", comments: [] },
  { id: 3, group: "SEVENTEEN", name: "carat_diary", text: "Yuk berbagi lagu SEVENTEEN yang paling berkesan buat kalian! 💎", comments: [] },
  { id: 4, group: "ENHYPEN", name: "engene_day", text: "Apa lagu ENHYPEN yang pertama kali membuat kalian tertarik dengan grup ini? 🌙", comments: [] },
  { id: 5, group: "EVAN", name: "evan_listener", text: "Ada rekomendasi karya EVAN yang harus aku dengarkan? 🎤", comments: [] },
  { id: 6, group: "CORTIS", name: "coer_diary", text: "Lagu CORTIS mana yang paling sering kalian putar? 🎧", comments: [] }
];

function getSavedPosts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultPosts;
  } catch (error) {
    return defaultPosts;
  }
}

let communityPosts = getSavedPosts();

function savePosts() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(communityPosts)); }
  catch (error) { console.warn("Postingan tidak dapat disimpan di browser ini."); }
}

function safeText(element, text) {
  element.textContent = text;
}

function renderPosts() {
  const feed = document.getElementById("postFeed");
  const select = document.getElementById("communitySelect");
  if (!feed || !select) return;
  const group = select.value;
  const heading = document.getElementById("communityHeading");
  safeText(heading, group + " Community");
  feed.replaceChildren();
  const visiblePosts = communityPosts.filter(post => post.group === group);
  if (visiblePosts.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-feed";
    empty.innerHTML = "<span>💬</span><p class='fw-bold mt-2 mb-1'>Belum ada diskusi</p><p class='mb-0'>Jadilah yang pertama memulai percakapan di komunitas ini!</p>";
    feed.appendChild(empty);
    return;
  }
  visiblePosts.forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card";
    const head = document.createElement("div");
    head.className = "post-card-head";
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = (post.name || "F").charAt(0).toUpperCase();
    const identity = document.createElement("div");
    const name = document.createElement("h3");
    safeText(name, post.name || "Penggemar");
    const date = document.createElement("div");
    date.className = "post-date";
    safeText(date, post.date || "Baru saja");
    identity.append(name, date);
    head.append(avatar, identity);
    const content = document.createElement("p");
    content.className = "post-content mb-3";
    safeText(content, post.text);
    const divider = document.createElement("hr");
    divider.className = "my-2";
    const commentTitle = document.createElement("strong");
    commentTitle.textContent = `💬 Komentar (${post.comments.length})`;
    const commentList = document.createElement("div");
    commentList.className = "comment-list";
    post.comments.forEach(comment => {
      const item = document.createElement("div");
      item.className = "comment-item";
      const strong = document.createElement("strong");
      safeText(strong, comment.name + ": ");
      item.append(strong, document.createTextNode(comment.text));
      commentList.appendChild(item);
    });
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    const commentInput = document.createElement("input");
    commentInput.className = "form-control";
    commentInput.type = "text";
    commentInput.maxLength = 250;
    commentInput.placeholder = "Tulis komentar...";
    commentInput.setAttribute("aria-label", "Tulis komentar");
    commentInput.required = true;
    const commentButton = document.createElement("button");
    commentButton.className = "btn btn-outline-purple";
    commentButton.type = "submit";
    commentButton.textContent = "Kirim";
    commentForm.append(commentInput, commentButton);
    commentForm.addEventListener("submit", event => {
      event.preventDefault();
      const text = commentInput.value.trim();
      if (!text) return;
      post.comments.push({ name: "Penggemar", text });
      savePosts();
      renderPosts();
    });
    card.append(head, content, divider, commentTitle, commentList, commentForm);
    feed.appendChild(card);
  });
}

function setupCommunity() {
  const form = document.getElementById("postForm");
  const select = document.getElementById("communitySelect");
  if (!form || !select) return;
  select.addEventListener("change", renderPosts);
  form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("postName").value.trim();
    const text = document.getElementById("postText").value.trim();
    const notice = document.getElementById("postNotice");
    if (!name || !text) {
      notice.textContent = "Nama dan isi postingan harus diisi.";
      notice.style.color = "#b42318";
      return;
    }
    communityPosts.unshift({ id: Date.now(), group: select.value, name, text, date: "Baru saja", comments: [] });
    savePosts();
    form.reset();
    notice.textContent = "Postingan berhasil ditambahkan ke komunitas " + select.value + "!";
    notice.style.color = "#287a45";
    renderPosts();
  });
  renderPosts();
}

document.addEventListener("DOMContentLoaded", function () {
  showDetailArticle();
  setupLoginForm();
  setupCommunity();
});
