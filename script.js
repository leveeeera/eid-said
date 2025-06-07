function generateGreeting() {
  const name = document.getElementById("name").value.trim();
  const style = document.getElementById("style").value;
  const resultDiv = document.getElementById("result");
  const whatsappLink = document.getElementById("whatsappLink");

  if (!name) {
    resultDiv.innerText = "⚠️ المرجو إدخال اسم الشخص أولاً";
    return;
  }

  const messages = {
    funny: [
      `🤣 ${name}.\nالعيد الكبير جا وانت باقي كتشوف فالثمن ديال الحولي؟ 😂 عيدك مبارك بالضحك والنشاط.`,
      `😂 ${name},\nEid Al-Adha is here, and the sheep are hiding! 🐏 Enjoy your day with laughter and BBQ!`
    ],
    serious: [
      `🌙 ${name}.\nتقبل الله منّا ومنكم صالح الأعمال، وكل عام وأنتم بخير. عيد أضحى مبارك.`,
      `🌙 ${name},\nWishing you peace, blessings, and joy this Eid Al-Adha.`
    ],
    spiritual: [
      `🕊️ ${name}.\nنسأل الله أن يجعل أضحيتكم طهراً، ويغمر قلوبكم بالإيمان والنور. عيدكم مبارك.`,
      `🕊️ ${name},\nMay Allah accept your sacrifice and grant your heart peace. Eid Mubarak.`
    ],
    special: [
      `💛 ${name}.\nما نقدروش نخليو العيد يدوز بلا ما نقولو ليك عيدك مبروك. انت عزيز بزاف.`,
      `💛 ${name},\nYou're always in our thoughts. Eid wouldn’t be complete without greeting you. Eid Al-Adha Mubarak!`
    ],
    darija: [
      `🐏 ${name},\nعيدك مبارك بالصحة والسلامة، والله يدخل عليك العيد الكبير بالفرحة والرزق.`,
      `🐑 ${name},\nالله يحقق ليك ما تمنيت، ويخلي داركم عامرة بالحب والبركة. 3id lkbiiir moubarak!`
    ]
  };

  let message = "";

  if (style === "random") {
    const allMessages = Object.values(messages).flat();
    const randomIndex = Math.floor(Math.random() * allMessages.length);
    message = allMessages[randomIndex];
  } else {
    const selectedMessages = messages[style];
    if (!selectedMessages) {
      message = `🐑 عيد أضحى مبارك ${name}!`;
    } else {
      const randomIndex = Math.floor(Math.random() * selectedMessages.length);
      message = selectedMessages[randomIndex];
    }
  }

  resultDiv.innerText = message;

  const encodedMsg = encodeURIComponent(message);
  whatsappLink.href = `https://wa.me/?text=${encodedMsg}`;
}

function showToast(message, isSuccess = true) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.backgroundColor = isSuccess ? "#28a745" : "#dc3545";
  toast.style.visibility = "visible";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.visibility = "hidden";
  }, 3000);
}

function copyToClipboard() {
  const result = document.getElementById("result").innerText;
  if (!result) return showToast("لا توجد تهنئة لنسخها!", false);

  navigator.clipboard.writeText(result)
    .then(() => showToast("✅ تم نسخ التهنئة!", true))
    .catch(() => showToast("❌ حدث خطأ أثناء النسخ.", false));
}
