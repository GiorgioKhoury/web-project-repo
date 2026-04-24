const conich = document.getElementById('conich');
const sects  = document.getElementsByTagName('section');

const headers = document.getElementsByClassName('headers');
const descriptions = document.getElementsByClassName('descriptions');
const tocHead = document.getElementById('toch');
const conts = document.getElementsByClassName('contents');

//
// ----- ANIMATION BORDERS -----
//
let [i, j, k, z, f, g, h] = [0, 45, 180, 270, 300, 110, 25];
const conicStyle = (n) => {

	return `conic-gradient(from ${n}deg, #050c1c, #8500f9)`;
}
setInterval(() => {
	conich.style.backgroundImage = conicStyle(i);

	sects[0].style.backgroundImage = conicStyle(j);
	sects[1].style.backgroundImage = conicStyle(k);
	sects[2].style.backgroundImage = conicStyle(z);
	sects[3].style.backgroundImage = conicStyle(f);
	sects[4].style.backgroundImage = conicStyle(g);
	sects[5].style.backgroundImage = conicStyle(h);
	sects[6].style.backgroundImage = conicStyle(j);
	sects[7].style.backgroundImage = conicStyle(k);
	sects[8].style.backgroundImage = conicStyle(i);

	i++; j++; k++; z++; f++; g++; h++;
}, 10);


// 
// ----- TRANSLATION -----
//
const eng = [
	{
		header: 'The Internet and the World Wide Web',
		description: `
			Learn what the Internet and the World Wide Web are, how they work, and why
			the are important in our daily life.
			`
	},
	{
		header: 'Introduction',
		description: `
			The Internet and the World Wide Web are very important parts of modern life.
            Today, people use them almost every day in different ways.
            Students use them to study, search for information, and complete assignments.
            Workers use them to send emails, attend meetings, and share files.
            Families also use them to stay in contact with each other even when they are far away.
            In addition, many people use them for entertainment such as videos, music, and games.
            Because they are used so often, many people think the Internet and the Web are the same thing.
            However, this is not true because each one has a different meaning and role.
            The Internet is the system that connects devices around the world.
            The Web is one of the services that works through that system.
            Learning about both of them helps us understand technology better.
            It also helps us become smarter and safer users in everyday life.
			`
	},
	{
		header: 'What is the Internet?',
		description: `
            The Internet is a huge global network that connects millions of devices together.
            These devices can be computers, phones, tablets, servers, and smart machines.
            The Internet allows them to exchange information in a very short time.
            It works through cables, fiber optics, satellites, and wireless signals.
            When people send messages or open online pages, the Internet carries the data.
            It is the main system behind emails, apps, games, and video streaming.
            Without the Internet, devices would not be able to communicate on a worldwide level.
            It does not belong to one person or one company only.
            Instead, it is made of many networks linked together across different countries.
            Each device connected to it has a special address to send and receive data.
            This makes communication organized and possible between different users.
            In simple words, the Internet is the foundation of online communication.
			`
	},
	{
		header: 'What is the World Wide Web?',
		description: `
			The World Wide Web, also called the Web or WWW, is a collection of websites and web pages.
			People access these pages through the Internet by using a browser.
			Common browsers include Chrome, Edge, Firefox, and Safari.
			When someone types a website address and opens a page, they are using the Web.
			The Web includes text, images, videos, links, and many other forms of content.
			It helps people find information easily and move from one page to another.
			Websites are stored on computers called servers and sent to the user when requested.
			The Web is one of the most popular services that uses the Internet.
			This means the Web depends on the Internet in order to work.
			It is the part that users usually see directly on their screens.
			Because of that, many people confuse it with the Internet itself.
			In reality, the Web is only one part of the larger Internet system.
			`
	},
	{
		header: 'Difference Between the Internet and WWW',
		description: `
			The Internet and the World Wide Web are closely connected, but they are not the same thing.
			The Internet is the global network that connects devices and allows data to travel.
			The World Wide Web is a service that uses this network to show websites and pages.
			A simple example is to think of the Internet as roads and the Web as the places you visit.
			The roads help you move, but they are not the same as the buildings and destinations.
			In the same way, the Internet carries information while the Web shows content to users.
			The Internet can also support other services besides the Web.
			For example, email and online file transfer also use the Internet.
			This proves that the Web is only one part of a bigger system.
			Many people mix the two names because they use the Web every day.
			However, knowing the difference is important in understanding technology correctly.
			So, the Internet is the connection, while the Web is the content people access.
			`
	},
	{
		header: 'How the Internet Works',
		description: `
			The Internet works by moving data from one device to another across many networks.
			When someone sends a message or opens a website, the data is divided into small packets.
			These packets travel through different paths until they reach the correct destination.
			Special devices called routers help direct the packets along the best path.
			When all the packets arrive, they are put back together in the correct order.
			This allows the user to see the full message, page, or video properly.
			The process happens very quickly, often in only a few seconds.
			The Internet follows special rules called protocols to organize communication.
			These rules help different devices understand each other correctly.
			Because of these protocols, devices from different companies can still connect.
			The Internet can work over cables, wireless systems, and even satellite connections.
			All of this makes online communication possible in a fast and organized way.
			`
	},
	{
		header: 'How the Web Works',
		description: `
			The Web works when a person opens a browser and enters a website address.
			The browser then sends a request to a server where the website is stored.
			A server is a computer that keeps website files and sends them when needed.
			After receiving the request, the server sends the page data back to the browser.
			The browser reads that data and displays the page on the screen.
			This is why users can see text, pictures, videos, and links on a website.
			If the user clicks another link, the same process starts again.
			The Web uses a system called HTTP or HTTPS to transfer page data.
			This system helps the browser and the server communicate correctly.
			The whole process usually happens very fast, so users do not notice the steps.
			Thanks to this system, people can search, read, shop, and learn online easily.
			In short, the Web works through cooperation between the browser, server, and Internet.
			`
	},
	{
		header: 'Uses of the Internet',
		description: `
			The Internet is used in many different areas of daily life.
			One of its main uses is communication through emails, chats, and video calls.
			People can talk to family members and friends from different countries in seconds.
			Students use the Internet for research, homework, and online learning platforms.
			Teachers also use it to share lessons, files, and educational videos.
			Businesses depend on it for advertising, customer support, and online meetings.
			Many people also use the Internet for entertainment like movies, music, and games.
			Online shopping is another common use because people can buy products from home.
			Banks and companies also provide services through the Internet.
			News websites and social media help people stay informed and connected.
			Because of all these uses, the Internet has become necessary in modern life.
			It saves time, gives access to information, and connects people around the world.
			`
	},
	{
		header: 'Advantages and Disadvantages',
		description: `
			The Internet has many advantages that make life easier for people.
			It gives fast access to information from different parts of the world.
			It also makes communication easier and quicker than in the past.
			Students can learn more easily, and workers can finish tasks online.
			Businesses can reach more customers and grow through online services.
			However, the Internet also has some disadvantages and risks.
			There is false information online, and not every source is trustworthy.
			Some people may face privacy problems, scams, or hacking attempts.
			Spending too much time online can also affect health and daily habits.
			In some cases, people may become too dependent on the Internet.
			Because of this, users should be careful and think before trusting everything online.
			The best way is to use the Internet in a smart, safe, and balanced manner.
			`
	},
	{
		header: 'Conclusion',
		description: `
			In conclusion, the Internet and the World Wide Web are very important in the modern world.
			They help people communicate, learn, work, and enjoy entertainment every day.
			The Internet is the large network that connects devices across the world.
			The Web is a service that allows people to access websites and online information.
			Even though many people confuse them, they are not exactly the same thing.
			Understanding the difference between them helps people understand technology better.
			It also helps users know how online communication and websites really function.
			Both the Internet and the Web have changed daily life in many positive ways.
			They support education, business, communication, and many useful services.
			At the same time, people should use them carefully because there are some risks.
			Safe and balanced use is important for getting the best benefits from them.
			As technology continues to grow, both the Internet and the Web will remain essential.
			`
	}
];
const engT = {
	title: 'Table of Contents',
	contents: [
       'Introduction', 'What is the Internet?', 'What is the World Wide Web?',
       'Diffenece Between the Internet and WWW', 'How the Internet Works',
       'How the Web Works', 'Uses of the Internet', 'Advantages and Disadvantages',
       'Conclusion'
	],
}
const arb = [
	{
		header: 'الإنترنت وشبكة الإنترنت العالمية',
		description: `
			.تعرف على ما هما الإنترنت وشبكة الإنترنت العالمية، وكيف يعملان، ولماذا هذه مهمة في حياتنا اليومية
			`
	},
	{
		header: 'مقدمة',
		description: `
			الإنترنت هو شبكة عالمية ضخمة تربط ملايين الأجهزة معا. يمكن أن تكون هذه الأجهزة أجهزة كمبيوتر، هواتف، أجهزة لوحية، خوادم، وأجهزة ذكية. الإنترنت يسمح لهم بتبادل المعلومات في وقت قصير جدا. يعمل عبر الكابلات، والألياف الضوئية، والأقمار الصناعية، والإشارات اللاسلكية. عندما يرسل الناس رسائل أو يفتحون صفحات على الإنترنت، يحمل الإنترنت البيانات. وهو النظام الرئيسي وراء البريد الإلكتروني والتطبيقات والألعاب وبث الفيديو. بدون الإنترنت، لن تتمكن الأجهزة من التواصل على مستوى العالم. لا ينتمي لشخص واحد أو لشركة واحدة فقط. بدلا من ذلك، يتكون من العديد من الشبكات المرتبطة عبر دول مختلفة. كل جهاز متصل به له عنوان خاص لإرسال واستقبال البيانات. وهذا يجعل التواصل منظما وممكنا بين المستخدمين المختلفين.
			`
	},
	{
		header: 'ما هو الإنترنت؟',
		description: `
			الإنترنت شبكة عالمية ضخمة تربط ملايين الأجهزة معًا.

			قد تكون هذه الأجهزة أجهزة كمبيوتر وهواتف وأجهزة لوحية وخوادم وآلات ذكية.

			يتيح لهم الإنترنت تبادل المعلومات في وقت قصير للغاية.

			وهو يعمل من خلال الكابلات والألياف البصرية والأقمار الصناعية والإشارات اللاسلكية.

			عندما يرسل الناس رسائل أو يفتحون صفحات عبر الإنترنت، فإن الإنترنت ينقل البيانات.

			وهو النظام الرئيسي وراء رسائل البريد الإلكتروني والتطبيقات والألعاب وبث الفيديو.

			وبدون الإنترنت، لن تتمكن الأجهزة من التواصل على مستوى عالمي.

			وهو لا يخص شخصًا واحدًا أو شركة واحدة فقط.

			بل يتكون من العديد من الشبكات المرتبطة ببعضها البعض عبر بلدان مختلفة.

			يحتوي كل جهاز متصل به على عنوان خاص لإرسال البيانات واستقبالها.

			وهذا يجعل التواصل منظمًا وممكنًا بين مختلف المستخدمين.

			بعبارات بسيطة، الإنترنت هو أساس التواصل عبر الإنترنت.
			`
	},
	{
		header: 'ما هي الشبكة العالمية (World Wide Web)؟',
		description: `
			الشبكة العالمية، التي تسمى أيضًا الويب أو WWW، هي مجموعة من مواقع الويب وصفحات الويب.

			يصل الأشخاص إلى هذه الصفحات عبر الإنترنت باستخدام متصفح.

			تشمل المتصفحات الشائعة Chrome وEdge وFirefox وSafari.

			عندما يكتب شخص ما عنوان موقع ويب ويفتح صفحة، فإنه يستخدم الويب.

			تتضمن شبكة الويب نصوصًا وصورًا ومقاطع فيديو وروابط والعديد من أشكال المحتوى الأخرى.

			وهي تساعد الناس على العثور على المعلومات بسهولة والانتقال من صفحة إلى أخرى.

			يتم تخزين مواقع الويب على أجهزة كمبيوتر تسمى الخوادم ويتم إرسالها إلى المستخدم عند الطلب.

			الويب هو أحد أكثر الخدمات شيوعًا التي تستخدم الإنترنت.

			وهذا يعني أن الويب يعتمد على الإنترنت من أجل العمل.

			وهو الجزء الذي يراه المستخدمون عادةً مباشرة على شاشاتهم.

			ولهذا السبب، يخلط الكثير من الناس بينها وبين الإنترنت نفسه.

			في الواقع، لا تمثل الويب سوى جزء واحد من نظام الإنترنت الأكبر.
			`
	},
	{
		header: 'الفرق بين الإنترنت والشبكة العالمية',
		description: `
			يرتبط الإنترنت والشبكة العالمية (World Wide Web) ارتباطًا وثيقًا، لكنهما ليسا الشيء نفسه.

			الإنترنت هو الشبكة العالمية التي تربط الأجهزة وتسمح بنقل البيانات.

			الويب العالمي هو خدمة تستخدم هذه الشبكة لعرض مواقع الويب والصفحات.

			مثال بسيط على ذلك هو التفكير في الإنترنت على أنه طرق والويب على أنه الأماكن التي تزورها.

			تساعدك الطرق على التنقل، لكنها ليست مثل المباني والوجهات.

			وبنفس الطريقة، ينقل الإنترنت المعلومات بينما يعرض الويب المحتوى للمستخدمين.

			يمكن للإنترنت أيضًا دعم خدمات أخرى إلى جانب الويب.

			على سبيل المثال، يستخدم البريد الإلكتروني ونقل الملفات عبر الإنترنت أيضًا الإنترنت.

			وهذا يثبت أن الويب ليس سوى جزء واحد من نظام أكبر.

			يخلط الكثير من الناس بين الاسمين لأنهم يستخدمون الويب كل يوم.

			ومع ذلك، فإن معرفة الفرق أمر مهم لفهم التكنولوجيا بشكل صحيح.

			لذلك، فإن الإنترنت هو الاتصال، بينما الويب هو المحتوى الذي يصل إليه الناس.
			`
	},
	{
		header: 'كيف يعمل الإنترنت',
		description: `
			يعمل الإنترنت عن طريق نقل البيانات من جهاز إلى آخر عبر العديد من الشبكات.

			عندما يرسل شخص ما رسالة أو يفتح موقعًا إلكترونيًا، يتم تقسيم البيانات إلى حزم صغيرة.

			تنتقل هذه الحزم عبر مسارات مختلفة حتى تصل إلى الوجهة الصحيحة.

			تساعد الأجهزة الخاصة التي تسمى أجهزة التوجيه في توجيه الحزم عبر أفضل مسار.

			عند وصول جميع الحزم، يتم تجميعها مرة أخرى بالترتيب الصحيح.

			يتيح ذلك للمستخدم رؤية الرسالة أو الصفحة أو الفيديو بالكامل بشكل صحيح.

			تحدث العملية بسرعة كبيرة، وغالبًا ما تستغرق بضع ثوانٍ فقط.

			يتبع الإنترنت قواعد خاصة تسمى البروتوكولات لتنظيم الاتصالات.

			تساعد هذه القواعد الأجهزة المختلفة على فهم بعضها البعض بشكل صحيح.

			وبفضل هذه البروتوكولات، لا يزال بإمكان الأجهزة من شركات مختلفة الاتصال ببعضها البعض.

			يمكن للإنترنت أن يعمل عبر الكابلات والأنظمة اللاسلكية وحتى عبر اتصالات الأقمار الصناعية.

			كل هذا يجعل التواصل عبر الإنترنت ممكنًا بطريقة سريعة ومنظمة.
			`
	},
	{
		header: 'كيفية عمل الويب',
		description: `
			يعمل الويب عندما يفتح الشخص متصفحا ويدخل عنوان الموقع. ثم يرسل المتصفح طلبا إلى خادم يخزن فيه الموقع. الخادم هو جهاز كمبيوتر يحتفظ بملفات الموقع ويرسلها عند الحاجة. بعد استلام الطلب، يعيد الخادم إرسال بيانات الصفحة إلى المتصفح. يقرأ المتصفح تلك البيانات ويعرض الصفحة على الشاشة. لهذا السبب يمكن للمستخدمين رؤية النصوص والصور والفيديوهات والروابط على الموقع الإلكتروني. إذا نقر المستخدم على رابط آخر، تبدأ نفس العملية من جديد. يستخدم الويب نظاما يسمى HTTP أو HTTPS لنقل بيانات الصفحات. يساعد هذا النظام المتصفح والخادم على التواصل بشكل صحيح. عادة ما تحدث العملية بسرعة كبيرة، لذا لا يلاحظ المستخدمون الخطوات. بفضل هذا النظام، يمكن للناس البحث والقراءة والتسوق والتعلم عبر الإنترنت بسهولة. باختصار، يعمل الويب من خلال التعاون بين المتصفح والخادم والإنترنت.
			`
	},
	{
		header: 'استخدامات الإنترنت',
		description: `
			يُستخدم الإنترنت في العديد من مجالات الحياة اليومية المختلفة.  
			أحد استخداماته الرئيسية هو التواصل عبر البريد الإلكتروني والدردشة ومكالمات الفيديو.  
			يمكن للناس التحدث مع أفراد العائلة والأصدقاء من دول مختلفة خلال ثوانٍ.  
			يستخدم الطلاب الإنترنت للبحث والواجبات المنزلية ومنصات التعلم عبر الإنترنت.  
			كما يستخدمه المعلمون لمشاركة الدروس والملفات ومقاطع الفيديو التعليمية.  
			تعتمد الشركات عليه للإعلان ودعم العملاء والاجتماعات عبر الإنترنت.  
			يستخدم العديد من الناس الإنترنت أيضًا للترفيه مثل الأفلام والموسيقى والألعاب.  
			يُعد التسوق عبر الإنترنت استخدامًا شائعًا آخر لأن الناس يمكنهم شراء المنتجات من المنزل.  
			كما توفر البنوك والشركات خدماتها عبر الإنترنت.  
			تساعد مواقع الأخبار ووسائل التواصل الاجتماعي الناس على البقاء على اطلاع والتواصل.  
			وبسبب كل هذه الاستخدامات، أصبح الإنترنت ضروريًا في الحياة الحديثة.  
			فهو يوفر الوقت، ويمنح الوصول إلى المعلومات، ويربط الناس حول العالم.
			`
	},
	{
		header: 'المزايا والعيوب',
		description: `
			للإنترنت العديد من المزايا التي تجعل الحياة أسهل للناس.  
			فهو يوفّر وصولًا سريعًا إلى المعلومات من مختلف أنحاء العالم.  
			كما يجعل التواصل أسهل وأسرع مما كان عليه في الماضي.  
			يمكن للطلاب التعلّم بسهولة أكبر، ويمكن للعمّال إنجاز المهام عبر الإنترنت.  
			تستطيع الشركات الوصول إلى عدد أكبر من العملاء والنمو من خلال الخدمات عبر الإنترنت.  
			ومع ذلك، فإن للإنترنت أيضًا بعض العيوب والمخاطر.  
			توجد معلومات خاطئة على الإنترنت، وليس كل مصدر جديرًا بالثقة.  
			قد يواجه بعض الأشخاص مشكلات في الخصوصية أو عمليات احتيال أو محاولات اختراق.  
			كما أن قضاء وقت طويل جدًا على الإنترنت قد يؤثر على الصحة والعادات اليومية.  
			وفي بعض الحالات، قد يصبح الناس معتمدين بشكل مفرط على الإنترنت.  
			لذلك، يجب على المستخدمين توخي الحذر والتفكير قبل تصديق كل ما هو موجود على الإنترنت.  
			وأفضل طريقة هي استخدام الإنترنت بطريقة ذكية وآمنة ومتوازنة.
			`
	},
	{
		header: 'الخاتمة',
		description: `
			في الختام، يُعدّ الإنترنت والشبكة العالمية (الويب) مهمَّين للغاية في العالم الحديث.  
			فهما يساعدان الناس على التواصل، والتعلّم، والعمل، والاستمتاع بالترفيه كل يوم.  
			الإنترنت هو الشبكة الكبيرة التي تربط الأجهزة حول العالم.  
			أما الويب فهو خدمة تتيح للناس الوصول إلى المواقع والمعلومات عبر الإنترنت.  
			وعلى الرغم من أن الكثير من الناس يخلطون بينهما، إلا أنهما ليسا الشيء نفسه تمامًا.  
			إن فهم الفرق بينهما يساعد الناس على فهم التكنولوجيا بشكل أفضل.  
			كما يساعد المستخدمين على معرفة كيفية عمل التواصل عبر الإنترنت والمواقع الإلكترونية فعليًا.  
			لقد غيّر كلٌّ من الإنترنت والويب الحياة اليومية بطرق إيجابية عديدة.  
			فهما يدعمان التعليم، والأعمال، والتواصل، والعديد من الخدمات المفيدة.  
			وفي الوقت نفسه، ينبغي على الناس استخدامهما بحذر لأن هناك بعض المخاطر.  
			إن الاستخدام الآمن والمتوازن مهم للحصول على أفضل الفوائد منهما.  
			ومع استمرار تطوّر التكنولوجيا، سيظل كلٌّ من الإنترنت والويب عنصرين أساسيين.
			`
	},
]
const arabT = {
	title: 'جدول المحتويات',
	contents: [
		'مقدمة', 'ما هو الإنترنت؟', 'ما هي الشبكة العالمية (World Wide Web)؟',
		'الفرق بين الإنترنت والشبكة العالمية', 'كيف يعمل الإنترنت',
		'كيفية عمل الويب', 'استخدامات الإنترنت', 'المزايا والعيوب', 'الخاتمة'
	]
}

let english = true;
function render() {
	if (english) {
		eng.forEach((par, index) => {
			const { header, description } = par;

			headers[index].textContent = header;
			descriptions[index].textContent = description;
		});

		tocHead.textContent = engT.title;
		engT.contents.forEach((i, index) => {
			conts[index].textContent = i;
		})
	}
	else {
		arb.forEach((par, index) => {
			const { header, description } = par;

			headers[index].textContent = header;
			descriptions[index].textContent = description;
		});

		tocHead.textContent = arabT.title;
		arabT.contents.forEach((i, index) => {
			conts[index].textContent = i;
		})
	}
}
function toggleLanguage() {
	english = !english;

	render();
}