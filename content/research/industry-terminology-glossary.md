# Industry Terminology Glossary — Workflows Visualize

## Healthcare
- **Core workflows:** Revenue cycle management (RCM), prior authorization workflow, claims adjudication follow-up, denial management, provider credentialing.
- **Common systems:** Epic, Cerner, Athenahealth, Availity, Change Healthcare.
- **Lifecycle phases:** Eligibility verification → prior authorization submission → charge capture & coding → claim submission/adjudication → denial management.
- **Reporting artifacts:** 837/835 transaction files, EOB/ERA, denial aging report, authorization packet.
- **Governance/compliance:** HIPAA minimum necessary rule, PHI access logs, payer policy version control.
- **Cross-system failure points:** HL7/FHIR mapping drift, auth expiration before date of service, denial reason code mismatch.

## Legal
- **Core workflows:** Matter lifecycle management, conflict checks, docketing, e-discovery staging, time capture and billing realization.
- **Common systems:** Clio, iManage, Relativity, NetDocuments, Aderant.
- **Lifecycle phases:** Conflict check → matter intake → engagement letter → docketing/deadline control → time capture & billing.
- **Reporting artifacts:** Conflict report, engagement letter, docket calendar, prebill/WIP report, trust ledger.
- **Governance/compliance:** IOLTA trust accounting controls, ethical wall enforcement, retention schedule by matter type.
- **Cross-system failure points:** Conflict result not refreshed at intake, docket updates outside source system, billing narrative rejection at prebill.

## Real Estate Investment (Private Equity)
- **Core workflows:** Deal sourcing funnel, underwriting model review, IC memo workflow, capital call/distribution waterfall, NAV reconciliation.
- **Common systems:** Yardi, MRI, Juniper Square, Salesforce, Investran.
- **Lifecycle phases:** Deal sourcing funnel → underwriting model → IC memo/approval → capital call or distribution → asset management and exit.
- **Reporting artifacts:** IC memo, ARGUS/Excel underwriting file, capital call notice, NOI bridge, fund-level IRR package.
- **Governance/compliance:** IC quorum rules, promote hurdle policy, valuation committee sign-off.
- **Cross-system failure points:** Underwriting version drift before IC, allocation mismatch in capital call waterfall, NAV reconciliation breaks at close.

## Finance
- **Core workflows:** Period close (soft close vs hard close), GL reconciliation, sub-ledger rollforward, treasury cash positioning, external audit support.
- **Common systems:** SAP S/4HANA, Oracle NetSuite, Workday Financials, BlackLine, Power BI.
- **Lifecycle phases:** Sub-ledger close → GL reconciliation → soft close review → hard close certification → external audit support.
- **Reporting artifacts:** Reconciliation packet, journal entry support, close checklist, management reporting pack, cash position report.
- **Governance/compliance:** SOX 302/404 controls, segregation of duties, audit trail retention.
- **Cross-system failure points:** Sub-ledger to GL tie-out breaks, late journal approvals, unresolved exceptions at hard close.

## Construction
- **Core workflows:** RFI lifecycle, submittal log control, change order management, pay application processing, cost-to-complete forecasting.
- **Common systems:** Procore, Autodesk Build, Primavera P6, Bluebeam, Sage 300 CRE.
- **Lifecycle phases:** RFI intake → submittal review → change order pricing → pay application processing → cost-to-complete forecast.
- **Reporting artifacts:** RFI log, submittal register, change order register, schedule of values (SOV), pay app package.
- **Governance/compliance:** Contract exhibit compliance, delegation-of-authority limits, lien waiver verification.
- **Cross-system failure points:** RFI resolution not reflected in submittal, CO aging beyond threshold, SOV line mismatch in pay app.

## PDS (Project & Development Services)
- **Core workflows:** Development budget tracking, GMP validation, milestone gating, contractor performance tracking, client reporting packages.
- **Common systems:** Procore, Oracle Unifier, MRI, Power BI, SharePoint.
- **Lifecycle phases:** Development budget baseline → GMP validation → milestone gate review → client reporting package → closeout/lessons learned.
- **Reporting artifacts:** Development budget workbook, GMP comparison log, milestone gate checklist, monthly client report.
- **Governance/compliance:** Stage-gate approval charter, client reporting SLA, consultant scope accountability.
- **Cross-system failure points:** Budget revision not reflected in GMP baseline, incomplete milestone evidence, stale workbook used for client report.

## Carousel taxonomy structure
- **Tabs:** Healthcare | Legal | Real Estate PE | Finance | Construction | PDS
- **Panel sections:** Fragmented State → Execution Layer → Executive Outcome
- **Execution Layer content blocks:** Lifecycle stages (4–6), Native artifacts, System dependencies, Governance markers (Log | Version | Ownership)

## Visual labeling guidelines
- Use named lifecycle blocks with stage numbers (e.g., “Stage 3 — Claim Submission & Adjudication”).
- Use system tags in plain text chips (e.g., “Epic”, “Procore”, “Clio”).
- Use governance marker chips: **Log**, **Version**, **Ownership**.
- Avoid abstract iconography, architecture diagrams, and feature-oriented UI labels.

## Executive-safe outcome pattern
- Use outcomes framed as: **control + continuity + auditability**.
- Keep language operational: no “transformation”, “efficiency”, or “best-in-class” claims.
- Position Novendor as an execution layer over existing systems of record.
