
<script>
/* ====== DATA ====== */
const courses = [
  {
    id: "react",
    title: "React.js المتقدم",
    desc: "تطوير واجهات المستخدم التفاعلية باستخدام أحدث تقنيات React",
    category: "تطوير الويب",
    level: "متقدم",
    duration: "24 ساعة",
    videosCount: "48 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS"
  },
  {
    id: "excel",
    title: "Excel للمحترفين",
    desc: "تحليل البيانات والمخططات المتقدمة والدوال المتقدمة",
    category: "أدوات مكتبية",
    level: "متوسط",
    duration: "18 ساعة",
    videosCount: "36 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLVn5UigDlJB8ZU35J4RyyEwfjJ9RH7-MK"
  },
  {
    id: "ai",
    title: "الذكاء الاصطناعي",
    desc: "مقدمة شاملة للذكاء الاصطناعي وتعلم الآلة",
    category: "التقنية",
    level: "مبتدئ",
    duration: "30 ساعة",
    videosCount: "60 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLSLMEu6gRp1Zw-4GFG0dFLFX5q48ZYe_T"
  },
  {
    id: "web",
    title: "تطوير الويب الشامل",
    desc: "HTML, CSS, JavaScript مشاريع عملية",
    category: "تطوير الويب",
    level: "مبتدئ",
    duration: "40 ساعة",
    videosCount: "80 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji"
  },
  {
    id: "python",
    title: "Python للبيانات",
    desc: "تحليل البيانات باستخدام Python ومكتباتها",
    category: "علوم البيانات",
    level: "متوسط",
    duration: "28 ساعة",
    videosCount: "56 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLvOO0btloRnuTUGN4XqO85eKPeFSZsEqK"
  },
  {
    id: "design",
    title: "تصميم UX/UI",
    desc: "مبادئ تصميم تجربة المستخدم وواجهات التطبيقات",
    category: "التصميم",
    level: "مبتدئ",
    duration: "20 ساعة",
    videosCount: "40 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLWPirh4EWFpFB7_wjLoHPnHl68WSxA6gJ"
  },
  {
    id: "mobile",
    title: "تطوير تطبيقات الجوال",
    desc: "React Native لتطوير تطبيقات iOS و Android",
    category: "تطوير الجوال",
    level: "متوسط",
    duration: "35 ساعة",
    videosCount: "70 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLAeuUfwnAxm4bAMXuq9LCXfJfIO9-PtkX"
  },
  {
    id: "security",
    title: "أمن المعلومات",
    desc: "مبادئ أساسية في أمن وحماية المعلومات",
    category: "الأمن السيبراني",
    level: "مبتدئ",
    duration: "22 ساعة",
    videosCount: "44 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLzMXToX8KzqhKrURIhVTJMb0v-HeDM3gs"
  },
  {
    id: "marketing",
    title: "التسويق الرقمي",
    desc: "استراتيجيات التسويق عبر وسائل التواصل الاجتماعي",
    category: "التسويق",
    level: "مبتدئ",
    duration: "25 ساعة",
    videosCount: "50 فيديو",
    playlist: "https://www.youtube.com/embed/videoseries?list=PLm8I8moAHiH2kkq0S9XGvIbPODrHzXRp6"
  }
];

let myCourses = JSON.parse(localStorage.getItem("myCourses")) || [];

/* ====== HOME ====== */
function renderHome() {
  const homeSection = document.getElementById('homeSection');
  homeSection.innerHTML = "";
  
  courses.forEach(c => {
    const enrolled = myCourses.includes(c.id);
    
    homeSection.innerHTML += `
      <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div class="relative">
          <div class="aspect-video bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
            <iframe class="absolute inset-0 w-full h-full" 
                    src="${c.playlist.replace('embed/videoseries?list=', 'embed?listType=playlist&list=')}&index=1"
                    allowfullscreen
                    loading="lazy">
            </iframe>
            <div class="absolute top-3 left-3">
              <span class="px-3 py-1 text-xs font-semibold rounded-full ${getLevelClass(c.level)}">
                ${c.level}
              </span>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <span class="text-white text-sm font-medium">${c.category}</span>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex justify-between items-start mb-3">
            <h3 class="font-bold text-xl text-gray-800">${c.title}</h3>
            <div class="flex flex-col items-end gap-1">
              <span class="text-sm text-gray-500 flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                ${c.duration}
              </span>
              <span class="text-xs text-gray-400 flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                </svg>
                ${c.videosCount}
              </span>
            </div>
          </div>
          
          <p class="text-gray-600 mb-6 leading-relaxed">${c.desc}</p>
          
          <button onclick="handleCourse('${c.id}')"
            class="w-full py-4 rounded-xl font-bold text-white transition-all duration-300
            ${enrolled ? 
              'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl' : 
              'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
            }
            active:scale-[0.98] transform flex items-center justify-center gap-3">
            ${enrolled ? 
              `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>استئناف التعلم</span>` : 
              `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
              <span>تسجيل في الدورة</span>`
            }
          </button>
        </div>
      </div>`;
  });
}

function getLevelClass(level) {
  const classes = {
    'مبتدئ': 'bg-blue-100 text-blue-700',
    'متوسط': 'bg-yellow-100 text-yellow-700',
    'متقدم': 'bg-red-100 text-red-700'
  };
  return classes[level] || 'bg-gray-100 text-gray-700';
}

/* ====== HANDLE COURSE ====== */
function handleCourse(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;
  
  if (!myCourses.includes(id)) {
    myCourses.push(id);
    localStorage.setItem("myCourses", JSON.stringify(myCourses));
    
    // إشعار بصوتي مرئي
    showNotification(`تم تسجيلك في دورة ${course.title} بنجاح!`, 'success');
  }
  
  renderHome();
  renderMyCourses();
  showMyCourses();
  showWhatsApp();
}

/* ====== MY COURSES ====== */
function renderMyCourses() {
  const myCoursesList = document.getElementById('myCoursesList');
  myCoursesList.innerHTML = "";
  
  if (myCourses.length === 0) {
    myCoursesList.innerHTML = `
      <div class="col-span-3 py-20 text-center">
        <div class="w-24 h-24 mx-auto mb-6 text-gray-300">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-500 mb-2">لا توجد دورات مسجلة</h3>
        <p class="text-gray-400 mb-6">سجل في دورة من الصفحة الرئيسية لتبدأ رحلة التعلم</p>
        <button onclick="showHome()"
          class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
          تصفح الدورات
        </button>
      </div>`;
    hideWhatsApp();
    return;
  }
  
  myCourses.forEach(id => {
    const c = courses.find(course => course.id === id);
    if (!c) return;
    
    myCoursesList.innerHTML += `
      <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <span class="p-2 rounded-lg ${getCategoryColor(c.category)}">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </span>
              <h3 class="font-bold text-lg text-gray-800">${c.title}</h3>
            </div>
            <p class="text-sm text-gray-600 mb-4">${c.desc.substring(0, 80)}...</p>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between text-sm text-gray-600">
            <div class="flex flex-col gap-1">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
                ${c.duration}
              </span>
              <span class="flex items-center gap-1 text-gray-500">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                </svg>
                ${c.videosCount}
              </span>
            </div>
            <span class="px-3 py-1 text-xs font-semibold rounded-full ${getLevelClass(c.level)}">
              ${c.level}
            </span>
          </div>
          
          <div class="flex gap-3">
            <button onclick="openCourse('${id}')"
              class="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl
              hover:from-blue-600 hover:to-purple-700 transition-all duration-300 active:scale-[0.98]
              flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
              </svg>
              ابدأ التعلم
            </button>
            
            <button onclick="removeCourse('${id}')"
              class="px-5 py-3 border border-red-200 text-red-600 font-semibold rounded-xl
              hover:bg-red-50 transition-all duration-300 active:scale-[0.98]
              flex items-center justify-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>`;
  });
  
  showWhatsApp();
}

function getCategoryColor(category) {
  const colors = {
    'تطوير الويب': 'bg-blue-500',
    'أدوات مكتبية': 'bg-green-500',
    'التقنية': 'bg-purple-500',
    'علوم البيانات': 'bg-pink-500',
    'التصميم': 'bg-yellow-500',
    'تطوير الجوال': 'bg-indigo-500',
    'الأمن السيبراني': 'bg-red-500',
    'التسويق': 'bg-teal-500'
  };
  return colors[category] || 'bg-gray-500';
}

/* ====== PLAYER ====== */
function openCourse(id) {
  const c = courses.find(course => course.id === id);
  if (!c) return;
  
  document.getElementById('playerTitle').textContent = c.title;
  document.getElementById('playerFrame').src = c.playlist;

  document.getElementById('homeSection').classList.add("hidden");
  document.getElementById('myCoursesSection').classList.add("hidden");
  document.getElementById('playerSection').classList.remove("hidden");
}

/* ====== BACK ====== */
function backToMyCourses() {
  document.getElementById('playerSection').classList.add("hidden");
  showMyCourses();
}

/* ====== REMOVE COURSE ====== */
function removeCourse(id) {
  if (confirm('هل أنت متأكد من إلغاء التسجيل في هذه الدورة؟')) {
    myCourses = myCourses.filter(course => course !== id);
    localStorage.setItem("myCourses", JSON.stringify(myCourses));
    
    const course = courses.find(c => c.id === id);
    showNotification(`تم إلغاء التسجيل في دورة ${course.title}`, 'info');
    
    renderHome();
    renderMyCourses();
  }
}

/* ====== NAV ====== */
function showHome() {
  document.getElementById('homeSection').classList.remove("hidden");
  document.getElementById('myCoursesSection').classList.add("hidden");
  document.getElementById('playerSection').classList.add("hidden");
  
  // تحديث حالة الأزرار
  document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active', 'text-blue-600'));
  document.querySelectorAll('.nav-button')[0].classList.add('active', 'text-blue-600');
  
  renderHome();
}

function showMyCourses() {
  document.getElementById('homeSection').classList.add("hidden");
  document.getElementById('myCoursesSection').classList.remove("hidden");
  document.getElementById('playerSection').classList.add("hidden");
  
  // تحديث حالة الأزرار
  document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active', 'text-blue-600'));
  document.querySelectorAll('.nav-button')[1].classList.add('active', 'text-blue-600');
  
  renderMyCourses();
}

/* ====== WHATSAPP ====== */
function showWhatsApp() {
  const btn = document.getElementById("whatsappButton");
  const tooltip = document.getElementById("whatsappTooltip");
  if (btn) {
    btn.classList.remove("hidden");
    btn.addEventListener("mouseenter", () => {
      tooltip.classList.remove("opacity-0", "-translate-y-2");
      tooltip.classList.add("opacity-100", "translate-y-0");
    });
    btn.addEventListener("mouseleave", () => {
      tooltip.classList.remove("opacity-100", "translate-y-0");
      tooltip.classList.add("opacity-0", "-translate-y-2");
    });
  }
}

function hideWhatsApp() {
  const btn = document.getElementById("whatsappButton");
  const tooltip = document.getElementById("whatsappTooltip");
  if (btn) {
    btn.classList.add("hidden");
    tooltip.classList.remove("opacity-100", "translate-y-0");
    tooltip.classList.add("opacity-0", "-translate-y-2");
  }
}

/* ====== إشعارات ====== */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-6 left-6 px-6 py-4 rounded-xl shadow-2xl z-50 transform transition-all duration-300 ${
    type === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
    type === 'error' ? 'bg-gradient-to-r from-red-500 to-pink-600' :
    'bg-gradient-to-r from-blue-500 to-purple-600'
  } text-white`;
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span class="font-medium">${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('opacity-0', 'translate-x-full');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

/* ====== INIT ====== */
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  renderMyCourses();
  
  if (myCourses.length > 0) {
    showWhatsApp();
    document.querySelectorAll('.nav-button')[1].classList.add('active', 'text-blue-600');
  } else {
    document.querySelectorAll('.nav-button')[0].classList.add('active', 'text-blue-600');
  }
  
  // إضافة أنيميشن للصفحة
  setTimeout(() => {
    document.body.classList.add('opacity-100');
  }, 100);
});

// إضافة أنيميشن عند التمرير
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const whatsappBtn = document.getElementById('whatsappButton');
  
  if (whatsappBtn && !whatsappBtn.classList.contains('hidden')) {
    if (currentScroll > lastScroll && currentScroll > 100) {
      whatsappBtn.style.transform = 'translateY(100px)';
    } else {
      whatsappBtn.style.transform = 'translateY(0)';
    }
  }
  
  lastScroll = currentScroll;
});
</script>

<script>
// =====Syber=====
    (() => {
      document.addEventListener("keydown", (e) => {
        if (
          (e.ctrlKey && e.shiftKey && ["I", "C", "J", "L"].includes(e.key.toUpperCase())) ||
          (e.key === "F12") ||
          (e.ctrlKey && e.key.toUpperCase() === "U")
        ) {
          e.preventDefault();
        }
      });

      document.addEventListener("copy", e => e.preventDefault());
      document.addEventListener("cut", e => e.preventDefault());
      document.addEventListener("contextmenu", e => e.preventDefault());
      document.addEventListener("selectstart", e => e.preventDefault());

      let detectSize = () => {
        if (window.outerWidth - window.innerWidth > 200 || 
            window.outerHeight - window.innerHeight > 200) {
          console.clear();
        }
      };
      window.addEventListener("resize", detectSize);

      let start = performance.now();
      console.log("%c ", "font-size:200px;");
      let end = performance.now();
      if (end - start > 50) console.clear();

      const observer = new MutationObserver(() => {
        console.clear();
      });
      observer.observe(document.documentElement, { 
        attributes: true, 
        childList: false, 
        subtree: false 
      });

      setInterval(() => {
        const t = Date.now();
        debugger;
        if (Date.now() - t > 100) console.clear();
      }, 500);
    })();
</script>
