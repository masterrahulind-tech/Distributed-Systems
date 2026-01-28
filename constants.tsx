
import React from 'react';
import { TopicMap, NavItem } from './types';

export const TOPIC_DATA: TopicMap = {
    goals: {
        title: "Goals of Distributed Systems",
        summary: "Distributed systems ka main goal hai ki user ko aisa lage ki wo ek single system use kar raha hai, bhale hi data 10 alag locations par ho. Isse <b>Transparency</b> kehte hain. Iska fayda ye hai ki aap resources ko asani se share kar sakte hain aur system ko kitna bhi bada (Scalable) bana sakte hain.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Transparency:</b> Hiding the distributed nature from users. Includes Access, Location, Migration, and Failure transparency.</li><li><b>Scalability:</b> Ability to grow without performance loss. Dimensions: Size, Geography, and Administration.</li><li><b>Openness:</b> Using standard rules (protocols) to allow different systems to talk.</li></ul>",
        diagram: `<svg width='300' height='100' viewBox='0 0 300 100'><rect x='10' y='60' width='80' height='30' fill='none' stroke='#00f2ff'/><text x='50' y='80' fill='#fff' font-size='10' text-anchor='middle'>User</text><line x1='90' y1='75' x2='120' y2='40' stroke='#bc13fe' stroke-width='2'/><rect x='120' y='10' width='150' height='40' fill='rgba(0,242,255,0.05)' stroke='#00f2ff'/><text x='180' y='35' fill='#00f2ff' font-size='10' text-anchor='middle'>Transparency Layer</text></svg>`
    },
    hardware: {
        title: "Hardware Concepts",
        summary: "Iska matlab hai ki CPUs aapas mein kaise jude hain. **Multiprocessor** matlab chefs ek hi kitchen share kar rahe hain (Shared Memory), aur **Multicomputer** matlab sabka apna independent kitchen hai (Local Memory).",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Multiprocessors:</b> Single physical RAM shared by all CPUs. Uses high-speed buses or switches.</li><li><b>Multicomputers:</b> Independent machines with private RAM. Communication via Network Message Passing.</li><li><b>Cluster Computing:</b> Collection of identical nodes.</li></ul>",
        diagram: `<svg width='200' height='80' viewBox='0 0 200 80'><rect x='20' y='10' width='40' height='25' stroke='#00f2ff' fill='none'/><rect x='80' y='10' width='40' height='25' stroke='#00f2ff' fill='none'/><line x1='40' y1='35' x2='40' y2='60' stroke='#bc13fe'/><line x1='100' y1='35' x2='100' y2='60' stroke='#bc13fe'/><rect x='20' y='60' width='120' height='15' stroke='#39ff14' fill='none'/><text x='80' y='72' fill='#39ff14' font-size='8' text-anchor='middle'>Shared RAM</text></svg>`
    },
    software: {
        title: "Software Concepts",
        summary: "Simple hai: Software decide karta hai ki system kaise behave karega. **DOS** sabko ek maanta hai, **NOS** independent nodes ko manage karta hai, aur **Middleware** inke beech ka bridge hai.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>DOS:</b> Tight coupling, low scalability, single system image.</li><li><b>NOS:</b> Loose coupling, high scalability, users must explicitly login to nodes.</li><li><b>Middleware:</b> Logical layer on top of NOS to provide location transparency and transparent services.</li></ul>",
    },
    client_server: {
        title: "The Client-Server Model",
        summary: "Simple hai: Ek side **Client** hota hai jo request bhejta hai (Jaise aapka browser), aur doosri side **Server** jo request process karke jawab deta hai. Ye modern distribution ka base hai.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Tiers:</b> 2-tier (Client-DB), 3-tier (UI-Logic-DB).</li><li><b>Vertical Distribution:</b> Separating logical layers on different servers.</li><li><b>Horizontal Distribution:</b> Cloning servers for high traffic handling.</li></ul>",
    },
    rpc_rmi: {
        title: "RPC & RMI",
        summary: "**RPC (Remote Procedure Call):** Iska matlab hai ki aap kisi doosre computer par function call kar rahe hain aur aapko network coding ki tension nahi leni. **RMI:** Jab hum objects (Java objects) ko remote machine par use karte hain.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Steps:</b> 1. Stub Marshals. 2. Transmission. 3. Skeleton Unmarshals. 4. Execution. 5. Result Return.</li><li><b>Marshaling:</b> Packing parameters into a binary message format.</li></ul>",
        diagram: `<svg width='300' height='80' viewBox='0 0 300 80'><rect x='10' y='20' width='60' height='40' stroke='#00f2ff' fill='none'/><text x='40' y='45' fill='#fff' font-size='10' text-anchor='middle'>Stub</text><path d='M70 40 L120 40' stroke='#bc13fe'/><path d='M180 40 L230 40' stroke='#bc13fe'/><rect x='230' y='20' width='60' height='40' stroke='#00f2ff' fill='none'/><text x='260' y='45' fill='#fff' font-size='10' text-anchor='middle'>Skeleton</text></svg>`
    },
    comm_oriented: {
        title: "Messaging & Streams",
        summary: "Simple hai: **Messaging** matlab async communication jahan sender bhej kar bhul jata hai (RabbitMQ). **Streams** matlab continuous data flow (Video call) jahan timing bahut critical hai.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>MOM:</b> persistent message queues, decoupling sender and receiver.</li><li><b>Streams:</b> Synchronization requirements (lip-sync), Bandwidth and Delay control (QoS).</li></ul>",
    },
    threads: {
        title: "Threads in Distributed Systems",
        summary: "Iska matlab hai ek bade process ke andar chhoti branches jo parallel kaam karti hain. Server threads use karta hai taaki hazaro clients ko ek saath handle kar sake bina ruke.",
        details: "<h4>Easy Exam Notes:</h4><ul><li>Lower context switching cost than full processes.</li><li>Essential for non-blocking I/O in distributed servers.</li><li>Implementation: User-level vs Kernel-level threads.</li></ul>",
    },
    server_design: {
        title: "Server Design",
        summary: "Simple hai: Server decide karta hai ki wo client ki purani baatein yaad rakhega (**Stateful**) ya har request ko ekdum naya manega (**Stateless**).",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Iterative:</b> One client at a time.</li><li><b>Concurrent:</b> Uses thread pool or dynamic processes.</li><li><b>Stateless:</b> Better scalability, easy crash recovery.</li></ul>",
    },
    migration: {
        title: "Code Migration",
        summary: "Simple hai: Bada data download karne se behtar hai ki chota program wahan bhej do jahan data rakha hai. Isse network ka load kam hota hai aur kaam fast hota hai.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Weak Mobility:</b> Move code only (restarts at target).</li><li><b>Strong Mobility:</b> Move code + execution stack (resumes at target).</li><li>Segments: Code, Resource, and Execution context.</li></ul>",
    },
    clocks: {
        title: "Clock Sync",
        summary: "Iska matlab hai network ki clocks ko sync karna taaki events ka order sahi rahe. **Lamport** counters use hote hain ye batane ki pehle kya hua aur baad mein kya.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Physical Clocks:</b> NTP and Berkeley Algorithm.</li><li><b>Logical Clocks:</b> Lamport Timestamps. Happens-before relation ($a \\to b \\Rightarrow C(a) < C(b)$).</li></ul>",
        diagram: `<svg width='250' height='100' viewBox='0 0 250 100'><line x1='20' y1='20' x2='220' y2='20' stroke='#00f2ff' stroke-width='2'/><circle cx='40' cy='20' r='4' fill='#bc13fe'/><line x1='20' y1='70' x2='220' y2='70' stroke='#00f2ff' stroke-width='2'/><circle cx='180' cy='70' r='4' fill='#bc13fe'/><path d='M40 20 L180 70' stroke='#39ff14' stroke-dasharray='4'/></svg>`
    },
    mutex: {
        title: "Mutual Exclusion",
        summary: "Simple hai: Maan lo ek hi printer hai aur do log use karna chahte hain. **Mutual Exclusion** ensure karta hai ki ek waqt par sirf ek hi banda use kare taaki data mix na ho.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Centralized:</b> Coordinator lock queue.</li><li><b>Distributed:</b> Ricart-Agrawala permission timestamps.</li><li><b>Token Ring:</b> Circulating token logic.</li></ul>",
    },
    bully_ring: {
        title: "Election Algorithms",
        summary: "Simple hai: Jab boss (coordinator) fail ho jaye, toh naya leader chunne ke liye election hota hai. Bada ID wala student sabko **Bully** karta hai ya phir message circle (**Ring**) mein ghumta hai. Election message ring mein ghoomta hai aur active IDs collect karta hai. Jo ID sabse badi milti hai, use leader announce kar diya jata hai.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Bully:</b> Highest ID wins.</li><li><b>Ring:</b> Election token circles active node list to find the maximum.</li></ul>",
        diagram: `<svg width='120' height='120' viewBox='0 0 120 120'><circle cx='60' cy='60' r='50' fill='none' stroke='#00f2ff' stroke-dasharray='4'/><circle cx='60' cy='10' r='8' fill='#00f2ff'/><circle cx='110' cy='60' r='8' fill='#00f2ff'/><circle cx='60' cy='110' r='8' fill='#00f2ff'/><circle cx='10' cy='60' r='8' fill='#00f2ff'/></svg>`
    },
    transactions: {
        title: "Transactions",
        summary: "Iska matlab hai ya toh saara kaam 'Commit' hoga ya phir 'Abort'. Beech mein kuch nahi chhodna. Iske liye coordinator sabse vote leta hai (2-Phase Commit).",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>2PC Protocol:</b> Prepare Phase (Voting) and Commit/Abort Phase (Decision).</li><li><b>ACID:</b> Atomicity, Consistency, Isolation, Durability.</li></ul>",
    },
    replication: {
        title: "Object Replication",
        summary: "Simple hai: Data ki multiple copies banana taaki agar ek server crash ho jaye toh backup hamesha ready rahe. Isse speed bhi badhti hai.",
        details: "<h4>Easy Exam Notes:</h4><ul><li><b>Goals:</b> Higher Availability and lower user Latency.</li><li><b>Placement:</b> <ul><li><i>Server-Initiated:</i> System pushes data to high-traffic areas.</li><li><i>Client-Initiated:</i> Users store local caches.</li></ul></li><li><b>Consistency Propagation:</b> <ul><li><i>Push:</i> Server pushes updates immediately (high consistency).</li><li><i>Pull:</i> Client asks for updates (lower overhead).</li></ul></li></ul>",
    },
    consistency_data: {
        title: "Data-Centric Models",
        summary: "Simple hai: Ye ensure karta hai ki data update hone par sabko sahi aur latest version dikhe. Sequential consistency matlab sabko ek hi order mein updates dikhenge.",
        details: "<h4>Technical Comparison:</h4><ul><li><b>Strict Consistency:</b> Impossible in real WAN. Global time order.</li><li><b>Sequential Consistency:</b> All users see the same order of updates.</li><li><b>Causal Consistency:</b> Updates with dependency relationships must be ordered.</li><li><b>FIFO Consistency:</b> Updates from the same node are seen in their creation order.</li></ul>",
    },
    consistency_client: {
        title: "Client-Centric Models",
        summary: "Iska matlab hai ki kam se kam ek single user ko apna update hamesha dikhna chahiye (**Read-Your-Writes**), chahe baaki duniya ko thoda late dikhe.",
        details: "<h4>Individual View Models:</h4><ul><li><b>Read-Your-Writes:</b> A user always sees their own latest update.</li><li><b>Monotonic Reads:</b> Version numbers never go backwards in a single session.</li><li><b>Monotonic Writes:</b> Multiple writes from one user are processed in order.</li></ul>",
    },
    process_resilience: {
        title: "Process Resilience",
        summary: "Simple hai: Servers ka group banana taaki agar ek server fail ho toh poora system na ruke. Isse system hamesha 'Alive' rehta hai.",
        details: "<h4>Resilience Architecture:</h4><ul><li><b>Process Groups:</b> Redundant nodes acting as one logical unit.</li><li><b>Group Communication:</b> Atomic Multicast ensures either everyone gets message or none.</li><li><b>Agreement:</b> Nodes must agree on which processes are active.</li></ul>",
    },
    fault_tolerance: {
        title: "Fault Tolerance",
        summary: "Iska matlab hai system ko errors ke khilaaf majboot banana. Byzantine failures matlab jhoot bolne wale nodes ko handle karna, jo sabse mushkil kaam hai.",
        details: "<h4>Resilience Notes:</h4><ul><li><b>Failure Types:</b> Crash (stopped), Omission (missed msgs), Timing (slow), Byzantine (liar/malicious).</li><li><b>k-Fault Tolerance:</b> Masking $k$ failures.</li><li><b>Byzantine Masking:</b> Requires $3k+1$ total nodes to achieve consensus.</li></ul>",
    },
    recovery: {
        title: "Recovery",
        summary: "Simple hai: System crash hone ke baad wapas sahi state mein kaise aayega. Ya toh purane save point (**Checkpoint**) par jao ya logs dekh kar state fix karo.",
        details: "<h4>Restoration Mechanics:</h4><ul><li><b>Backward Recovery:</b> Roll back to a stable storage <b>Checkpoint</b>.</li><li><b>Forward Recovery:</b> Fixing current state using redundant data without rollback.</li><li><b>Domino Effect:</b> Cascading failures during recovery if dependencies aren't tracked.</li></ul>",
    },
    kerberos: {
        title: "KERBEROS",
        summary: "Simple hai: Kerberos ek digital wristband (**Ticket**) jaisa hai. Ek baar login karo, ticket lo aur use dikhakar alag-alag zones (services) access karo bina password ke.",
        details: "<h4>Handshake protocol:</h4><ul><li><b>AS:</b> User authenticates once to get a TGT.</li><li><b>TGS:</b> User shows TGT to get a specific Service Ticket.</li><li><b>Verifier:</b> The server checks the Service Ticket for final access.</li><li>Benefit: Passwords never travel in clear-text over the wire.</li></ul>",
        diagram: `<svg width='300' height='120' viewBox='0 0 300 120'><circle cx='30' cy='60' r='15' stroke='#00f2ff' fill='none'/><rect x='120' y='10' width='100' height='35' stroke='#bc13fe' fill='none'/><rect x='120' y='75' width='100' height='35' stroke='#bc13fe' fill='none'/><path d='M45 55 L120 28' stroke='#39ff14'/><path d='M45 65 L120 92' stroke='#39ff14'/></svg>`
    },
    ssl_crypto: {
        title: "SSL & Crypto",
        summary: "Iska matlab hai data ko digital lock lagana. **Symmetric** mein ek hi chabi hoti hai, **Asymmetric** mein do (Public/Private). SSL inhi ka use karke secure rasta banata hai.",
        details: "<h4>Security Primitives:</h4><ul><li><b>Symmetric (AES):</b> Fast, single key. Problem: safe key exchange.</li><li><b>Asymmetric (RSA):</b> Secure handshake using Public/Private keys.</li><li><b>SSL/TLS:</b> Establishing encrypted tunnels via certificate authentication.</li></ul>",
    },
    security_mgmt: {
        title: "Security Management",
        summary: "Simple hai: Ye decide karna ki 'Kaun kya kar sakta hai'. Isme keys ko distribute karna aur user ki activities par nazar rakhna (Auditing) shamil hai.",
        details: "<h4>Architecture Points:</h4><ul><li><b>Access Control:</b> ACLs vs Capabilities (User-side tickets).</li><li><b>KDC:</b> Key Distribution Center centrally managing credentials.</li><li><b>Auditing:</b> Tracking behavioral logs for threat detection.</li></ul>",
    },
    corba: {
        title: "CORBA",
        summary: "Simple hai: CORBA ek aisa translator hai jo C++ aur Java jaise alag background wale objects ko aapas mein baat karne deta hai via **ORB** bridge.",
        details: "<h4>Ecosystem Notes:</h4><ul><li><b>ORB:</b> Communication bus for remote objects.</li><li><b>IDL:</b> Neutral Interface Definition Language.</li><li><b>SII vs DII:</b> Static vs Dynamic invocation.</li></ul>",
    },
    dcom: {
        title: "Distributed COM",
        summary: "Iska matlab hai Microsoft ki technology jo remote objects ko binary level par connect karti hai. Ye Windows networks mein distribution handle karne ke liye use hoti hai.",
        details: "<h4>Microsoft Objects:</h4><ul><li>Binary protocol extension for Windows.</li><li>Supports location transparency and lifecycle management via reference counting.</li></ul>",
    },
    dfs_design: {
        title: "DFS Design",
        summary: "Simple hai: Files ko network par aise access karna jaise wo aapke hi computer mein hon. Iska goal hai ki aapko pata hi na chale ki file remote server par hai.",
        details: "<h4>Design Principles:</h4><ul><li><b>Naming:</b> Location transparency (hide server info).</li><li><b>Updates:</b> Unix semantics (immediate) vs Session semantics (delayed).</li><li><b>Caching:</b> Client side storage for faster access.</li></ul>",
    },
    sun_nfs: {
        title: "Sun NFS",
        summary: "Iska matlab hai Sun Microsystems ka file sharing system. Isme **VFS** layer hoti hai jo local aur remote files ke beech ka antar mita deti hai.",
        details: "<h4>NFS Architecture:</h4><ul><li><b>VFS:</b> Abstract layer handling local/remote calls transparently.</li><li><b>Stateless Server:</b> easy recovery because no context is lost during crash.</li><li><b>RPC protocol:</b> synchronous operations.</li></ul>",
        diagram: `<svg width='280' height='120' viewBox='0 0 280 120'><rect x='20' y='10' width='240' height='30' fill='none' stroke='#00f2ff'/><rect x='20' y='40' width='240' height='30' fill='rgba(188,19,254,0.1)' stroke='#bc13fe'/><line x1='140' y1='70' x2='140' y2='100' stroke='#39ff14'/></svg>`
    },
    dsm: {
        title: "DSM",
        summary: "DSM ek software layer hai jo hardware distributed nodes ko aisa dikhata hai jaise wo ek hi shared memory use kar rahe hon. Programmer ko lagta hai wo normal memory access kar raha hai, par piche data network se move hota hai.",
        details: "<h4>Shared RAM:</h4><ul><li>Mapping logical memory to physical nodes.</li><li>Page fault handling across network.</li></ul>",
    },
    dsm_consistency: {
        title: "Memory Consistency",
        summary: "Simple hai: Jab ek process memory mein kuch likhta hai, toh doosre ko kab dikhega. Release consistency matlab lock chhodne par hi update sync hoga.",
        details: "<h4>Memory Protocols:</h4><ul><li><b>Release Consistency:</b> Sync on unlock release.</li><li><b>Entry Consistency:</b> Sync on lock acquisition.</li></ul>",
    },
    www: {
        title: "WWW",
        summary: "Simple hai: Duniya ka sabse bada document distribution system. Ye HTTP aur URLs use karta hai documents ko locate aur load karne ke liye.",
        details: "<h4>Web as a DS:</h4><ul><li>Stateless HTTP request cycles.</li><li>Caching proxies and CDNs for document delivery.</li><li>Universal URL transparency naming.</li></ul>",
    },
    jini: {
        title: "JINI",
        summary: "Iska matlab hai 'Plug and Play' gadgets ka network. Gadget network mein aate hi lookup service use karke khud ko register kar leta hai bina kisi driver ke.",
        details: "<h4>Federation:</h4><ul><li>Lookup Service discovers proxies.</li><li>Automatic session based leases.</li></ul>",
    },
    java_rmi: {
        title: "JAVA RMI",
        summary: "Simple hai: Java mein remote machine ka method aise call karna jaise wo local object ho. Isme stub aur skeleton saara technical kaam sambhal lete hain.",
        details: "<h4>Java Distribution:</h4><ul><li>Registry service find remote object references.</li><li>Built-in native Java serialization.</li></ul>",
    },
    ole_activex: {
        title: "OLE & ActiveX",
        summary: "Iska matlab hai documents ko aapas mein jodna (Jaise Excel chart Word mein). ActiveX reusable web components ke liye Microsoft ka standard hai.",
        details: "<h4>COM Components:</h4><ul><li>OLE: Object linking in documents.</li><li>ActiveX: reusable COM controls for browsers.</li></ul>",
    },
    som: {
        title: "IBM SOM",
        summary: "Simple hai: IBM ki technology jo classes ko binary level par compatible banati thi. Matlab ek compiler ka code doosre compiler ke code ke saath easily juda sakta tha.",
        details: "<h4>IBM SOM:</h4><ul><li>Binary object compatibility model.</li><li>Language-neutral class library support.</li></ul>",
    },
    orbix_visibrokes: {
        title: "Orbix & Visibrokes",
        summary: "Iska matlab hai high-performance commercial software jo CORBA standard follow karte hain aur bade groups (clusters) mein objects manage karte hain.",
        details: "<h4>Enterprise brokers:</h4><ul><li>Commercial standard-compliant Object Request Brokers with load balancing and persistent session support.</li></ul>",
    }
};

export const NAV_ITEMS: NavItem[] = [
    { id: 0, label: "Overview", icon: "fa-house", slideIdx: 0 },
    { id: 1, label: "Unit I: Intro", icon: "fa-1", slideIdx: 1 },
    { id: 2, label: "Unit II: Processes", icon: "fa-2", slideIdx: 3 },
    { id: 3, label: "Unit III: Resil", icon: "fa-3", slideIdx: 6 },
    { id: 4, label: "Unit IV: DFS", icon: "fa-4", slideIdx: 9 },
    { id: 5, label: "Unit V: Adv", icon: "fa-5", slideIdx: 11 },
];

export const SLIDE_COUNT = 14;

export const NAV_MAPPING = [0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5];
