const CONFIG={businessName:"Servicio Técnico",whatsapp:"",zone:"Atención local y consultas por WhatsApp"};
const services=[["⌁","Celulares","Pantallas, conectores, baterías, encendido y reparación de placa."],["▣","Notebooks y PCs","Diagnóstico, temperatura, conectores, alimentación y reparación electrónica."],["◈","Consolas","Encendido, HDMI, puertos, alimentación y fallas de placa."],["▤","TV y electrónica","Diagnóstico de fuentes, placas, conectores y componentes."],["⌘","Microsoldadura","Componentes SMD, conectores, pistas y trabajos de precisión."],["◉","Diagnóstico","Medición y búsqueda de la causa real antes de presupuestar."]];
const problems=["No enciende","No carga","Se apaga solo","No da imagen","Puerto roto","Se calienta demasiado","Falla intermitente","Pista o componente dañado"];
const steps=[["Recibimos el equipo","Registramos el estado y la falla informada."],["Diagnosticamos","Medimos y comprobamos la causa."],["Presupuestamos","Te informamos qué tiene y cuánto cuesta antes de avanzar."],["Reparamos y probamos","Realizamos el trabajo y verificamos el funcionamiento."]];
const faqs=[["¿Puedo llevar un equipo que otro técnico no pudo reparar?","Sí. El diagnóstico de placa y la microsoldadura son parte del servicio."],["¿Me cobran si finalmente no reparo el equipo?","La política depende del tipo de equipo y la falla. Consultanos antes de acercarlo."],["¿Reparan cualquier modelo?","Trabajamos con múltiples equipos y tecnologías. Primero evaluamos la falla."],["¿Dan garantía?","Cada reparación se entrega con condiciones de garantía acordes al trabajo realizado."]];
const app=document.querySelector("#app");
const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e};
const link=(text,href,cls)=>{const a=el("a",cls,text);a.href=href;return a};
const wa=()=>CONFIG.whatsapp?"https://wa.me/"+CONFIG.whatsapp:"#contacto";
const msg=()=>CONFIG.whatsapp?wa()+"?text="+encodeURIComponent("Hola, quiero consultar por una reparación."):"#contacto";

const header=el("header","site-header"),nav=el("div","container nav");
const brand=link(""," #");brand.className="brand";const mark=el("span","brand-mark","ST");brand.append(mark,document.createTextNode(CONFIG.businessName));nav.appendChild(brand);
const navLinks=el("nav","nav-links");[["Servicios","#servicios"],["Proceso","#proceso"],["Preguntas","#faq"],["Contacto","#contacto"]].forEach(x=>navLinks.appendChild(link(x[0],x[1])));
const menu=el("button","menu-btn","☰");menu.setAttribute("aria-label","Abrir menú");menu.setAttribute("aria-expanded","false");nav.append(navLinks,menu);header.appendChild(nav);app.appendChild(header);

const main=el("main");
const hero=el("section","hero"),hg=el("div","container hero-grid"),copy=el("div","hero-copy");
copy.appendChild(el("span","eyebrow","Diagnóstico · Reparación · Microsoldadura"));
const h1=el("h1");h1.append(document.createTextNode("Tu equipo falla."),document.createElement("br"));const span=el("span","", "Nosotros buscamos por qué.");h1.appendChild(span);copy.appendChild(h1);
copy.appendChild(el("p","lead","Servicio técnico especializado en electrónica, con diagnóstico profesional y reparación de placa para equipos que necesitan algo más que cambiar una pieza."));
const actions=el("div","hero-actions");actions.append(link("Pedir diagnóstico ↗",msg(),"btn btn-primary"),link("Ver servicios","#servicios","btn btn-ghost"));copy.appendChild(actions);
const proof=el("div","hero-proof");[["Diagnóstico","antes de presupuestar"],["Precisión","trabajo sobre placa"]].forEach(x=>{const d=el("div","proof");d.append(el("strong","",x[0]),el("span","",x[1]));proof.appendChild(d)});copy.appendChild(proof);
const art=el("div","hero-art");art.innerHTML='<div class="circuit"></div><div class="trace t1"></div><div class="trace t2"></div><div class="trace t3"></div><div class="chip"></div><div class="floating-card"><span class="dot"></span>Laboratorio técnico</div>';hg.append(copy,art);hero.appendChild(hg);main.appendChild(hero);

function section(title,eyebrow,leadText){const s=el("section","section");const c=el("div","container");const head=el("div","section-head reveal");const left=el("div");left.append(el("span","eyebrow",eyebrow),el("h2","",title));head.appendChild(left);if(leadText)head.appendChild(el("p","lead",leadText));c.appendChild(head);s.appendChild(c);return [s,c]};
let pair=section("Reparamos más que el síntoma.","Qué hacemos","Encontramos la causa y te damos una solución clara.");const cards=el("div","cards");services.forEach(x=>{const card=el("article","card reveal"),ic=el("div","icon",x[0]);card.append(ic,el("h3","",x[1]),el("p","",x[2]));cards.appendChild(card)});pair[1].appendChild(cards);pair[0].id="servicios";main.appendChild(pair[0]);

pair=section("¿Te pasa alguna de estas?","Fallas frecuentes");const pg=el("div","problem-grid");problems.forEach(x=>pg.appendChild(el("div","problem reveal","→ "+x)));pair[1].appendChild(pg);main.appendChild(pair[0]);
pair=section("Un proceso claro, de principio a fin.","Cómo trabajamos");const process=el("div","process");steps.forEach((x,i)=>{const st=el("article","step reveal");st.append(el("h3","",x[0]),el("p","",x[1]));process.appendChild(st)});pair[1].appendChild(process);pair[0].id="proceso";main.appendChild(pair[0]);

const trust=el("section","section"),tc=el("div","container trust"),tl=el("div","reveal");tl.append(el("span","eyebrow","Trabajo profesional"),el("h2","","Cuando cambiar una pieza no alcanza."),el("p","lead","La reparación electrónica requiere medir, interpretar y trabajar con precisión. Por eso cada equipo se evalúa antes de intervenirlo."));const tb=el("div","trust-box reveal");tb.appendChild(el("h3","","Qué podés esperar"));const list=el("div","trust-list");["Diagnóstico antes de autorizar la reparación.","Presupuesto explicado de forma simple.","Pruebas de funcionamiento antes de entregar.","Comunicación directa durante el proceso."].forEach(x=>{const d=el("div");d.append(el("span","check","✓"),el("span","",x));list.appendChild(d)});tb.appendChild(list);tc.append(tl,tb);trust.appendChild(tc);main.appendChild(trust);

pair=section("Antes de traer tu equipo.","Preguntas frecuentes");const faq=el("div","faq");faqs.forEach(x=>{const item=el("div","faq-item reveal"),btn=el("button","faq-q",x[0]),plus=el("span","","+");btn.appendChild(plus);const ans=el("div","faq-a"),inner=el("div","",x[1]);ans.appendChild(inner);btn.addEventListener("click",()=>{const open=item.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));plus.textContent=open?"−":"+"});item.append(btn,ans);faq.appendChild(item)});pair[1].appendChild(faq);pair[0].id="faq";main.appendChild(pair[0]);

const contact=el("section","section"),cc=el("div","container"),box=el("div","contact reveal"),ct=el("div");ct.append(el("span","eyebrow","¿Tenés una falla?"),el("h2","","Contanos qué le pasa a tu equipo."),el("p","","Mandanos el modelo y una breve descripción. Te orientamos sobre los próximos pasos."));box.append(ct,link("Consultar por WhatsApp ↗",msg(),"btn btn-primary"));cc.appendChild(box);contact.id="contacto";contact.appendChild(cc);main.appendChild(contact);app.appendChild(main);

const footer=el("footer","footer"),fc=el("div","container footer-inner");fc.append(el("div","","© "+new Date().getFullYear()+" "+CONFIG.businessName+"."),el("div","",CONFIG.zone));footer.appendChild(fc);app.appendChild(footer);app.appendChild(link("WA",wa(),"float-wa"));

menu.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));
const schema={"@context":"https://schema.org","@type":"ProfessionalService","name":CONFIG.businessName,"description":"Servicio técnico especializado en reparación electrónica, diagnóstico y microsoldadura."};const sc=document.createElement("script");sc.type="application/ld+json";sc.textContent=JSON.stringify(schema);document.head.appendChild(sc);