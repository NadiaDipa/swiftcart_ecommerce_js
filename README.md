# JavaScript Question and Answer

1) What is the difference between null and undefined? 
==> null মানে ইচ্ছাকৃতভাবে empty value সেট করা হয়েছে।
==> undefined হচ্ছে ভ্যারিয়েবলে value initialize করা হয়নি।

2) What is the use of the map() function in JavaScript? How is it different from forEach()? 
==> map হচ্ছে new array return করে, function call করে।
==> forEach () array -র প্রতি item কে loop করে iterate করে, কিন্তু new array return করে না।

3) What is the difference between == and ===? 
== হচ্ছে শুধু value চেক করে। আর type convert করে।
=== হচ্ছে type, value দুটোই চেক করে, এটা ইউজ করাই secure.

4) What is the significance of async/await in fetching API data? 
==> async হচ্ছে কোনো data get করার সময় একটা promise return করে। await হচ্ছে ওই promise এর response আসা পর্যন্ত wait করে। এটা ইউজ করলে data fetch এ bug থাকলে debug করা সহজ।

5) Explain the concept of Scope in JavaScript (Global, Function, Block). 
==> global হচ্ছে স্কোপের যেকোনো জায়গা থেকে access করা যায়।
Function হচ্ছে, শুধু ফাংশনের মধ্যেই access করা যাবে, বাইরে থেকে access করা যাবে না । যেমন var,let, const
Block স্কোপ হচ্ছে, শুধু block স্কোপের মধ্যেই কাজ করবে, বাইরে থেকে access করা যাবে না। যেমন : let, const









## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT (SwiftCart E-Commerce)


## Repository: Create your own public repository and submit the link.

---
## 🛍️ API Endpoints
---
1. Get 🛍️ All Products
```bash
https://fakestoreapi.com/products
```

2. Get 🛍️ All Categories
```bash
https://fakestoreapi.com/products/categories
```

3. Get 🛍️ Products by Category
```bash
https://fakestoreapi.com/products/category/${category}
```

Example:
```bash
https://fakestoreapi.com/products/category/jewelery
```

4. Get 🛍️ Single Product Detail
```bash
https://fakestoreapi.com/products/${id}
```

Example:
```bash
https://fakestoreapi.com/products/1
```

---

## 🎯 Project Specifications (UI/UX)

#### 1) Navbar
- Website **logo/name** ("SwiftCart") on the **left**
- **Menu items** (Home, Products, About, Contact) in the **center**
- **Cart Icon/Button** on the **right** (showing item count is a bonus)

#### 2) Banner / Hero Section
- A **background image** (related to shopping/fashion/electronics)
- A **title** (e.g., "Best Collection For You") and **subtitle**
- A **centered button** (e.g., "Shop Now")

#### 3) Features / Why Choose Us
- **Section heading**
- **3-4 items** highlighting features like "Fast Delivery", "24/7 Support", "Secure Payment", etc. (Icon + Title + Short Text)

#### 4) Trending / Top Rated Section
- Show **3 top-rated products** (you can filter by rating or just pick the first 3) based on API data or hardcoded for layout practice.

#### 5) Newsletter & Footer
- **Newsletter Subscription Form**: Email input + Subscribe button.
- **Footer** with copyright info, social links, and quick links.

#### 6) Responsiveness
- Website must be **mobile responsive** 

---
#### 7) Create a README file to answer the following questions-

> **⚠️ Warning:** Do not use any AI tools to answer these questions. You must write the answers in **Bangla**.

#### 1) What is the difference between `null` and `undefined`?

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

#### 3) What is the difference between `==` and `===`?

#### 4) What is the significance of `async`/`await` in fetching API data?

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

## ⚡ Dynamic Features & Functionalities

1) Category Loading
Load Product Categories dynamically on the UI (e.g., as filter buttons or a dropdown).

2) Category Click → Product Data
On clicking a category: load products of that specific category.
Display in a grid layout (e.g., 3 or 4 columns).

3) Card Contents
Each product card must include:
- **Image** (from API)
- **Title** (truncated if too long)
- **Price** ($ value)
- **Category** (badge or text)
- **Rating** (Visualize stars or just show the number)
- **Details Button**
- **Add to Cart button**

4) Modal on "Details" Click
Clicking the "Details" button on a card opens a modal with full product details:
- Full Title
- Full Description
- Price & Rating
- "Buy Now" or "Add to Cart" button in modal.

## 🧪 Challenges (Optional)

    1) Add to Cart Interaction
    Clicking "Add to Cart":
    - Adds the product to a Cart list/array.
    - Updates a Cart Count in the Navbar.
    - (Optional) Persist in LocalStorage.

    2) Cart Calculation
    Show a summary (maybe in a sidebar or a separate section/modal) that lists added items and calculates the **Total Price**.

    3) Remove from Cart
    Ability to remove an item from the cart and update the Total Price instantly.

    4) Loading Spinner
    Show a loading spinner or skeleton loader while fetching data from the API.

    5) Active State
    Highlight the currently selected category button.

🧰 Technology Stack:
    HTML
    CSS (Vanilla / Tailwind / DaisyUI)
    JavaScript (Vanilla only, no frameworks like React/Vue for this assignment)

📌 Rules
✅ At least 5 meaningful commits
❌ No dummy text where real data can be shown.

## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE


### 📅 Deadline For 60 marks: 17th February, 2026 (11:59 pm ⏱️)
- Note: There won't be any 50 or 30 marks submission deadline. Only 60 marks submission deadline. After 17th February, 2026 (11:59 pm ⏱️) no submission will be accepted.