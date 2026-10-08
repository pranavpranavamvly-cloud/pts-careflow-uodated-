# CareFlow — AI-Assisted Healthcare Availability & Emergency Coordination

> **A Pre-Visit Intelligence Layer & Healthcare Emergency Coordination Dashboard**  
> *"Know before you go: compare live hospital queues, doctor wait times, test pricing, drug inventory, blood bank stock, and emergency bed availability before stepping out."*

---

## 1. Problem Statement

Patients and families routinely visit outpatient clinics and hospital casualty wards with zero visibility into:
1. **Queue Delays**: Whether a clinic is currently overwhelmed by long waiting queues (often waiting 45–90 minutes unknowingly).
2. **Specialist & Resource Availability**: Whether the required doctor, diagnostic scan (e.g. Chest X-Ray/CT), essential medicine, or blood component is actually available on-site.
3. **Financial Surprises**: What outpatient consultation, registration fees, and diagnostic tests will cost out-of-pocket, or whether cashless TPA insurance is accepted.
4. **Emergency Transit Pitfalls**: Critical delays during emergencies caused by arriving at facilities without open trauma beds, ICU ventilators, or blood buffers.

---

## 2. The CareFlow Solution

**CareFlow** acts as an intelligent pre-visit healthcare decision assistant. Rather than functioning as a passive directory, CareFlow continuously models facility crowds, queue clearance velocities, travel times, and tariffs to answer six essential patient questions:

```text
What healthcare service do I need?
          ↓
Where can I get it?
          ↓
How long will it take? (Travel + Queue Wait)
          ↓
How much will it cost? (Transparent Out-of-Pocket Bill)
          ↓
Which option is best? (Explainable AI Recommendation)
          ↓
How do I get there? (Fastest Route Navigation)
```

---

## 3. Killer Features & Capabilities

### ⚡ Total Estimated Time to Doctor (Door-to-Doctor Metric)
- Combines live traffic transit time with real-time clinic waiting times:
  $$\text{Total Time} = \text{Travel Time} + \text{Estimated OP Queue Wait}$$
- Highlighted prominently on every facility card, allowing patients to instantly identify that a hospital 12 minutes away with an 8-minute wait is faster than a clinic 5 minutes away with a 45-minute wait.

### 🤖 Explainable AI Recommendation Engine
- Rather than a black-box recommendation, CareFlow provides transparent, explainable reasoning:
  - **AI Confidence Score** (e.g., `94%`)
  - **Dynamic Bullet Explanations**:
    - `✓ 14 min faster door-to-doctor time than regional alternative average`
    - `✓ 28% lower crowd density right now (3 in queue vs peak rush)`
    - `✓ ₹300 transparent consultation tariff (no hidden registration fees)`
    - `✓ Open 24/7 with on-site diagnostics & pharmacy`
    - `✓ Emergency & ICU capable with 4 ventilator beds free`

### ⚖️ Side-by-Side Facility Comparison Matrix
- Select 2–3 facilities and click **Compare Now**.
- Opens a side-by-side comparison matrix across 12 criteria (Distance, Travel Time, Crowd Level, Waiting Queue, Doctor Fee, Total Time to Doctor, Emergency Beds, ICU Ventilators, Blood Bank, Pharmacy, Lab, Cashless Insurance).
- Dynamically highlights the **best value** for each metric with green badges (`FASTEST`, `LOWEST COST`, `LEAST CROWD`, `WINNER`).
- Includes one-click comparison link sharing.

### 🚨 Dedicated Critical Care Emergency Mode (SOS)
- Activates an urgent, high-contrast, dark-mode critical care dashboard:
  - **Zero-Wait Triage**: Prioritizes Level-1 trauma centers with free resuscitation beds.
  - **Real-Time ICU & Ventilator Tracking**: Shows active ventilator capacity.
  - **Universal Blood Buffering**: Verifies O-Negative emergency blood stocks.
  - **Standby Ambulances**: Displays nearest ALS/BLS ambulances with distance and live ETA.
  - **Primary Actions**:
    1. *Call Emergency Services (108)*
    2. *Request Ambulance Dispatch* (opens simulated telemetry tracker with ETA countdown)
    3. *Navigate to Hospital* (one-click emergency casualty route)

### 🩺 Doctor Queues & Pre-Visit Tokens
- Filter by specialty (General Medicine, Cardiology, Pediatrics, Orthopedics, Dermatology, ENT).
- View on-duty doctors, active queues, consultation fees, and total door-to-consultation delays.
- Generate a simulated **OP Queue Pre-Token** pass with unique token ID, estimated consultation slot, and instructions to show at hospital reception.

### 🔬 Labs & Diagnostic Cost Transparency
- Compare prices and queue turnaround times for routine tests (CBC, Blood Sugar, Lipid Profile, Thyroid, LFT, KFT, Digital Chest X-Ray).
- Clearly highlights **Cheapest Option** and **Fastest Option** badges across partner centers.

### 💊 Medicine & Pharmacy Radar
- Search for standard medications or critical therapeutics (Epinephrine, Nitroglycerin, Insulin Glargine, Remdesivir).
- Real-time stock breakdown across 24/7 hospital pharmacies with prices and distance.

### 🩸 Blood Bank Component Inventory
- Filter by blood group (`O+`, `O- Universal`, `A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`) with unit quantity counter.
- Shows proximity, processing tariff, and buffer availability with simulated reservation capability.

### 💳 Transparent Bill & Out-of-Pocket Estimator
- Interactive calculator combining consultation, registration, diagnostic tests, scans, and nursing fees.
- Real-time itemized provisional receipt and payment support checklist (UPI, Credit Cards, Cash, Cashless TPA insurance helpdesk).
- Download / Print PDF visit pass and one-click copy to clipboard.

### 🗺️ Healthcare Route Planning & Map Experience
- Stylized interactive SVG route map displaying user starting pin, destination hospital pin, nearby clinic pins, fastest glowing route, alternative route, and live traffic condition badges.
- Turn-by-turn navigation preview and direct integration link with Google Maps.

### 🔖 Bookmarking & Saved Items
- Save favorite hospitals, doctors, and generated queue passes in `localStorage` without requiring authentication.
- Access saved items instantly from the header pill counter.

---

## 4. User Journeys

### Routine Outpatient Consultation Flow
```text
1. Select Vicinity (e.g. Indiranagar, Metro Pillar 78)
2. Search Need (e.g., "General Medicine" or "CBC Blood Test")
3. Compare Facilities (Evaluate Total Door-to-Doctor time, crowd %, and fees)
4. Review AI Recommendation (Check confidence % and explainable advantages)
5. Estimate Bill (Calculate itemized out-of-pocket costs)
6. Generate Queue Pre-Token (Secure simulated lobby queue slot)
7. Navigate (Inspect turn-by-turn directions and traffic flow)
```

### Emergency Medical Crisis Flow
```text
1. Click EMERGENCY SOS (High-urgency protocol engaged)
2. Auto-Locked to Nearest Trauma Center with free casualty beds
3. Check Critical Buffers (ICU Ventilators + O- Universal Blood verified)
4. Dispatch Standby Ambulance (ALS unit ETA 4 mins)
5. Direct GPS Navigation to Emergency Casualty Bay
(Care prioritized immediately — Zero payment gatekeeping)
```

---

## 5. Technology Stack & Architecture

- **Markup**: Semantic HTML5 with accessible ARIA landmarks and modal management.
- **Styling**: Vanilla CSS3 design system with CSS custom properties (design tokens), flexible CSS Grid / Flexbox layouts, micro-animations, and responsive breakpoints.
- **Application Logic**: Vanilla JavaScript ES6+ (Zero external npm libraries or heavy frameworks; runs directly in any modern browser).
- **Storage**: Client-side `localStorage` for bookmarks and generated queue passes.
- **Simulation Engine**: Automated 12-second background simulation ticks modulating crowd percentages and patient queue counters.

---

## 6. How to Run Locally

Because CareFlow is built with standard web technologies and requires no backend build step:

1. Clone or download the repository folder.
2. Open `index.html` directly in any web browser (Chrome, Firefox, Safari, Edge):
   ```bash
   # On Windows PowerShell:
   Start-Process "index.html"
   ```
3. Alternatively, serve via any lightweight static server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

---

## 7. Important Statutory Disclaimer

> **SIMULATED PROTOTYPE NOTICE:**  
> All data in this CareFlow prototype—including hospital crowd levels, patient queues, waiting times, consultation fees, diagnostic test prices, medicine inventory, blood bank units, and emergency response times—is **simulated for demonstration and design validation purposes only**. It does not connect to live hospital APIs and must not be used for actual medical emergencies, clinical diagnoses, or real financial transactions. In case of a real medical emergency, call national emergency medical services (such as **108 / 112**) immediately.
