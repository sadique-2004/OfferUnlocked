// ══════════════════════════════════════════════════
// ROADMAP DATA
// Edit months / weeks / days freely.
// Each day has: day (label), tasks (array of strings)
// ══════════════════════════════════════════════════

export const roadmapData = [
  {
    name:  'Month 1 — Foundation',
    short: 'Month 1',
    weeks: [
      {
        name: 'Week 1 · Arrays & Complexity',
        days: [
          { day: 'Day 1',  tasks: ['2× Array problems (Easy)', 'Big O — time & space analysis', 'Aptitude: Ratios & Proportions'] },
          { day: 'Day 2',  tasks: ['Two Pointer technique × 3', 'HTML/CSS: Flexbox mastery', 'Aptitude: Percentages'] },
          { day: 'Day 3',  tasks: ['Sliding Window problems × 3', 'JavaScript: Variables, Functions, Scope', 'OS: Process vs Thread'] },
          { day: 'Day 4',  tasks: ['Prefix Sum pattern × 2', 'JS: Arrays, Loops, Objects', 'DBMS: Keys and Relations'] },
          { day: 'Day 5',  tasks: ['Weekly revision — Arrays', 'Mini project: Todo App (HTML/CSS/JS)', 'Timed aptitude mock (20 min)'] },
        ],
      },
      {
        name: 'Week 2 · Strings & Hashing',
        days: [
          { day: 'Day 6',  tasks: ['String problems × 3', 'JS: DOM Manipulation', 'CN: OSI Model'] },
          { day: 'Day 7',  tasks: ['HashMap / frequency-map × 3', 'CSS: Responsive design', 'Aptitude: Time & Work'] },
          { day: 'Day 8',  tasks: ['Anagram detection, group anagrams', 'JS: Fetch API + Promises', 'OS: Memory Management'] },
          { day: 'Day 9',  tasks: ['LeetCode Medium attempt × 2', 'CSS Grid layout', 'DBMS: Normalization 1NF–3NF'] },
          { day: 'Day 10', tasks: ['Revision: Strings + Hashing', 'Build: Portfolio skeleton', '15 aptitude questions (timed)'] },
        ],
      },
      {
        name: 'Week 3 · Sorting & Binary Search',
        days: [
          { day: 'Day 11', tasks: ['Implement all major sorting algorithms', 'JS: async/await, try-catch', 'Aptitude: Profit & Loss'] },
          { day: 'Day 12', tasks: ['Binary Search problems × 4', 'React: JSX, components, props', 'CN: TCP/IP deep dive'] },
          { day: 'Day 13', tasks: ['BS on answer pattern × 2', 'React: useState + useEffect', 'OS: Scheduling algorithms'] },
          { day: 'Day 14', tasks: ['Week 3 revision', 'React Todo app from scratch', 'Aptitude mock test'] },
        ],
      },
      {
        name: 'Week 4 · Recursion & Backtracking',
        days: [
          { day: 'Day 15', tasks: ['Recursion: subsets, permutations', 'Node.js: modules, fs', 'Aptitude: Number system'] },
          { day: 'Day 16', tasks: ['Backtracking: N-Queens, Sudoku Solver', 'Express.js: basic server + routing', 'DBMS: SQL basics'] },
          { day: 'Day 17', tasks: ['Recursion practice × 3', 'REST API: GET/POST routes', 'CN: DNS & HTTP'] },
          { day: 'Day 18', tasks: ['Month 1 comprehensive revision', 'Project checkpoint', 'Full mock: DSA + Aptitude'] },
        ],
      },
    ],
  },
  {
    name:  'Month 2 — Core Data Structures',
    short: 'Month 2',
    weeks: [
      {
        name: 'Week 5 · Linked Lists',
        days: [
          { day: 'Day 29', tasks: ['Singly LL: insert, delete, reverse', 'React: React Router v6', 'DBMS: Joins (INNER, LEFT, RIGHT)'] },
          { day: 'Day 30', tasks: ["Floyd's Cycle Detection", 'React: Context API', 'OS: Deadlock conditions'] },
          { day: 'Day 31', tasks: ['Merge two sorted LLs', 'React: custom hooks', 'SQL: GROUP BY, HAVING'] },
          { day: 'Day 32', tasks: ['LRU Cache implementation', 'MongoDB: CRUD operations', 'Aptitude: Probability'] },
        ],
      },
      {
        name: 'Week 6 · Stacks & Queues',
        days: [
          { day: 'Day 33', tasks: ['Monotonic Stack × 3', 'MongoDB: aggregation pipelines', 'CN: Load balancing'] },
          { day: 'Day 34', tasks: ['Next Greater Element, Stock Span', 'Mongoose ODM setup', 'DBMS: Transactions, ACID'] },
          { day: 'Day 35', tasks: ['Sliding Window Maximum (deque)', 'Full-stack: connect React ↔ Express', 'Aptitude: Permutations & Combinations'] },
        ],
      },
      {
        name: 'Week 7 · Trees',
        days: [
          { day: 'Day 36', tasks: ['BFS, DFS, all traversals', 'Auth: JWT + bcrypt', 'OS: Virtual memory'] },
          { day: 'Day 37', tasks: ['BST: insert, search, validate', 'Protected routes in Express', 'Aptitude: Series completion'] },
          { day: 'Day 38', tasks: ['Height, diameter, LCA', 'Build: complete user auth system', 'CN: HTTPS, SSL/TLS'] },
          { day: 'Day 39', tasks: ['Heap: min/max, K largest', 'Deploy to Railway / Render', 'Week 7 revision'] },
        ],
      },
      {
        name: 'Week 8 · Graphs',
        days: [
          { day: 'Day 40', tasks: ['Graph: adj list & matrix', 'Project: start full-stack app', 'OS: File system'] },
          { day: 'Day 41', tasks: ['BFS/DFS on graphs, cycle detection', 'Project: UI complete', 'Aptitude: Logical Reasoning'] },
          { day: 'Day 42', tasks: ['Dijkstra, Topological Sort', 'Project: backend APIs complete', 'Peer mock technical interview'] },
        ],
      },
    ],
  },
  {
    name:  'Month 3 — Advanced DSA + Projects',
    short: 'Month 3',
    weeks: [
      {
        name: 'Week 9 · Dynamic Programming',
        days: [
          { day: 'Day 57', tasks: ['DP: Fibonacci variants', 'System Design: Scalability basics', 'Aptitude: Data Interpretation'] },
          { day: 'Day 58', tasks: ['DP: 0/1 Knapsack', 'System Design: Caching (Redis)', 'Project iteration'] },
          { day: 'Day 59', tasks: ['DP: Longest Common Subsequence', 'System Design: Load Balancer', 'LeetCode DP Medium × 2'] },
          { day: 'Day 60', tasks: ['DP: Edit Distance, Matrix Chain', 'System Design: CDN concepts', 'Full mock test'] },
        ],
      },
      {
        name: 'Week 10 · Tries & Advanced Graphs',
        days: [
          { day: 'Day 61', tasks: ['Trie: build, insert, search', 'System Design: Database sharding', 'LeetCode Hard attempt × 1'] },
          { day: 'Day 62', tasks: ['Bellman-Ford, Floyd-Warshall', 'System Design: Consistent hashing', 'Aptitude: Speed & Distance'] },
          { day: 'Day 63', tasks: ['Bridges, Articulation Points', 'Full project: final polish', 'Peer mock interview #2'] },
        ],
      },
      {
        name: 'Week 11 · Project Sprint',
        days: [
          { day: 'Day 64', tasks: ['Deploy project + documentation', 'Write portfolio case study', 'LeetCode: top 50 revision'] },
          { day: 'Day 65', tasks: ['Resume update with project', 'LinkedIn profile optimization', '10 company-specific problems'] },
          { day: 'Day 66', tasks: ['System design mock (1 hr)', 'HR round Q&A practice', 'Month 3 comprehensive revision'] },
        ],
      },
    ],
  },
  {
    name:  'Month 4 — Interview Ready',
    short: 'Month 4',
    weeks: [
      {
        name: 'Week 13 · Company-Specific Prep',
        days: [
          { day: 'Day 85', tasks: ['TCS/Infosys: patterns + OA prep', '10 cold applications', 'Full aptitude mock'] },
          { day: 'Day 86', tasks: ['Amazon leadership principles', 'LeetCode Amazon tag × 5', '3 STAR behavioral stories'] },
          { day: 'Day 87', tasks: ['Flipkart/Paytm system design', 'Project demo dry run', 'Peer technical mock'] },
        ],
      },
      {
        name: 'Week 14 · Final Sprint',
        days: [
          { day: 'Day 91', tasks: ['Full interview simulation (2 hrs)', 'Targeted weak-area revision', 'Applications follow-up'] },
          { day: 'Day 92', tasks: ['OA contest: HackerRank/CodeChef', 'System design question × 1', '30 aptitude questions timed'] },
          { day: 'Day 93', tasks: ['Final 50 LeetCode revision', 'CS fundamentals flash review', 'Offer or iterate — never stop 🇮🇳'] },
        ],
      },
    ],
  },
];
