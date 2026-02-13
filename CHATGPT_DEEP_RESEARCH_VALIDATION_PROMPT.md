# Deep Research Validation Prompt (Standalone)

Use this prompt to run a high-rigor, tactful validation pass on Novendor's public content.

## Context You Should Assume

Novendor's positioning is execution infrastructure for operational workflows.

Core claim:
- Replace one broken workflow at a time with an internal system the client owns.
- Keep core systems in place.
- Run old and new workflows in parallel.
- Cut over only when evidence is clear.


Commercial posture:
- Fixed-scope, fixed-fee engagements.
- Not seat-based software licensing.
- Not hourly staff augmentation.
- Not a big-bang rip-and-replace program.

Tone requirements:
- Practitioner-grade
- Calm
- Enterprise-safe
- Specific
- No hype
- No vendor attacks
- No generic transformation language

Industries in scope:
- Healthcare
- Legal
- Real Estate Private Equity
- Finance
- Construction
- Project & Development Services (PDS)

## Existing Content Model (What You Are Validating)

Each industry is structured into:
1. Operational Lifecycle
2. System Fragmentation
3. Risk Context (Benchmarks)
4. Failure Mechanics
5. What We Reconstruct
6. Data Quality Prerequisites
7. Engagement Model
8. Change Management & Continuity
9. Regulatory / Jurisdictional Variance
10. Executive Outcomes (Measurable)
11. Sources

Cross-industry engagement model:
- Phase 1: Operational Audit
- Phase 2: Control Definition
- Phase 3: Execution Layer Build
- Phase 4: Continuity Transfer

Execution-layer control principles:
- Canonical lifecycle states
- Named ownership by state
- Version-controlled artifacts
- Logged approvals and escalations
- Taxonomy normalization
- Audit-ready outputs

## Industry-Specific Technical Domains to Validate

Healthcare examples expected:
- 837 claim transmission
- 835 ERA reconciliation
- CARC/RARC normalization
- Denial root cause taxonomy
- Contract variance/underpayment analysis
- PHI escalation logging
- A/R aging >90 by owner

Legal examples expected:
- Matter intake workflow
- Conflict check registry
- Engagement letter execution
- Time capture and realization
- Trust accounting (IOLTA) reconciliation
- Partner write-off controls
- Phase-level profitability logic

Real Estate PE examples expected:
- IC memo approval log
- Underwriting model version control
- Capital call lifecycle
- Waterfall promote calculation
- NAV reconciliation
- Asset-level NOI bridge
- LP distribution auditability

Finance examples expected:
- Journal entry workflow
- Sub-ledger rollforward
- Intercompany elimination
- SOX control evidence
- Close calendar enforcement
- Variance bridge reproducibility

Construction examples expected:
- RFI lifecycle
- Submittal registry
- Change order approval chain
- Schedule of Values reconciliation
- Cost-to-complete forecast validation
- Pay application audit trail

PDS examples expected:
- Development budget versioning
- GMP validation controls
- Headcount-to-fee allocation
- Milestone gating framework
- Contractor performance scoring
- Client reporting package standardization

## Your Task

You are a senior operator + domain researcher + enterprise content reviewer.
Validate whether this content is factually sound, practitioner-grade, and enterprise-safe.

Do not rewrite for style first. Validate for accuracy first.

## Validation Requirements

For each industry:
1. Operational lifecycle accuracy
- Are stage names realistic and used by practitioners?
- Are owner roles accurate?
- Are key artifacts correctly named?

2. System dependency realism
- Are system categories and common tools plausible?
- Are integration assumptions realistic?

3. Fragmentation and failure mechanics credibility
- Are failure points technically and operationally plausible?
- Are mechanics clearly causal (not vague symptoms)?

4. Risk quantification quality
- Are risk statements quantified with conservative ranges where possible?
- Is each hard metric paired with source and publication/access date?
- Are benchmark ranges framed as directional, not universal guarantees?

5. Control model feasibility
- Is the execution-layer approach feasible in regulated environments?
- Are governance, logging, and audit controls operationally realistic?

6. Change-management realism
- Are owner enablement, training, cutover controls, and governance cadence explicit?
- Are handoff and continuity controls clear enough for operator adoption?

7. Data quality prerequisites
- Are upstream data quality dependencies explicit?
- Does content avoid implying automation will succeed without data controls?

8. Compliance and legal risk posture
- Identify where wording may overstate certainty.
- Flag where disclaimers or qualifications are needed.
- Validate jurisdictional/regulatory variance caveats for each industry.

9. Executive outcome defensibility
- Are outcomes measurable and decision-relevant?
- Is each outcome linked to lifecycle interventions and control mechanisms?
- Are claims causally defensible without overpromising?

10. AI capability boundary integrity
- Flag wording that implies autonomous action where human control is required.
- Confirm AI language is clearly AI-assisted and governed.
- Confirm sensitive-data handling requirements are explicit.

## Research Quality Standard

- Use current, credible sources.
- Prioritize primary sources where possible (regulators, standards, official system docs, authoritative industry bodies).
- No stat without source and date.
- Cite sources for non-obvious claims.
- Distinguish clearly between:
  - Confirmed fact
  - Inference
  - Recommendation
- If uncertain, state uncertainty explicitly.

## Hard Constraints

- No hype language.
- No vendor-bashing.
- No generic “digital transformation” phrasing.
- No forced full rewrite if targeted corrections are sufficient.

## Required Output Format

### 1) Executive Assessment
- Overall confidence score (0-100)
- Top strengths
- Top risks

### 2) Industry-by-Industry Validation Table
For each industry include:
- Accuracy score (0-100)
- What is strong
- What is questionable
- What is missing
- Top 3 corrections
- Source-backed notes

### 3) Claim Validation Table (Required)
For each high-impact claim include:
- Claim
- Current wording
- Confidence (High/Med/Low)
- Benchmark range (if applicable)
- Source + date
- Recommended rewrite
- Caveat needed (Yes/No)

### 4) Cross-Cutting Risk Register
For each risk:
- Claim
- Risk type (factual / compliance / overpromise / ambiguity)
- Severity (High/Med/Low)
- Recommended revision
- Source(s)

### 5) Edit-Ready Recommendations
Provide line-level suggestions in this format:
- Current wording
- Proposed wording
- Why
- Source(s)

### 6) Prioritized Gaps
- P1, P2, P3 actions to raise enterprise trust and operator credibility.

## Fail Conditions (Must Flag)

Flag the review as failed if any of these are present:
- Any hard metric with no source and date.
- Any executive outcome not tied to lifecycle stage/control mechanism.
- Any AI claim implying autonomous execution without explicit control language.
- Any industry page lacking change-management or data-quality prerequisites.
- Any industry page missing regulatory/jurisdiction variance caveat.

## Reviewer Tone Guidance

Use language like:
- “This is strong because…”
- “This may be interpreted as…”
- “To reduce risk, consider…”
- “A tighter phrasing would be…”

Avoid:
- Dismissive tone
- Broad negative judgments without evidence

## Final Validation Checklist

Before finalizing, confirm:
- Terminology accuracy by industry
- Equal depth across all six industries
- No single industry dominates quality
- Execution-infrastructure positioning remains clear
- Lifecycle states are explicit
- Outcomes are measurable and defensible
- Risk context is quantified with sourced ranges
- AI boundaries are clearly AI-assisted with human control
