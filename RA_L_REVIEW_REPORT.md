# IEEE Robotics and Automation Letters (RA-L) Review Report
## Paper: "Double-Reactive Planning for Heterogeneous Robots with Evolving Capabilities in Unknown Environments"

---

## OVERALL RECOMMENDATION: **ACCEPT WITH MINOR REVISIONS**

**Confidence Level:** High

**Overall Score:** **7.5/10** (Strong Accept)

---

## SUMMARY

This paper presents Double-Reactive Planning (DRP), a novel framework for heterogeneous robot teams that simultaneously handles environmental discovery and capability evolution under LTL specifications. The key innovation is a hierarchical replanning architecture that distinguishes between tactical environmental changes (requiring local adjustments) and strategic capability changes (requiring global resynthesis). The work is technically sound, well-motivated, and demonstrates significant experimental validation.

---

## DETAILED EVALUATION

### 1. TECHNICAL QUALITY (Score: 8/10)

**Strengths:**
- **Formal Framework**: The paper provides rigorous mathematical foundations with clear definitions (Capability Transition Function, PO-wTS, etc.)
- **Theoretical Guarantees**: Theorem 1 (soundness & completeness) and Theorem 2 (complexity characterization) provide solid theoretical backing
- **Hierarchical Architecture**: The distinction between fast local reallocation and global resynthesis is well-motivated and elegant
- **Complexity Analysis**: The paper honestly addresses computational complexity (PSPACE-complete) and provides practical solutions

**Weaknesses:**
- **Proof Brevity**: Theorem proofs are very concise. While correctness appears sound, more detailed proof sketches would strengthen confidence
- **Capability Transition Function**: The deterministic nature of γ may be limiting in practice where capability acquisition has uncertainty
- **Scalability Bounds**: Limited discussion on how the method scales beyond 2-3 robots and 10-20 tasks

**Specific Technical Concerns:**
1. **Definition 2 (Capability Transition Function)**: The precondition function `pre()` is mentioned as "optional" but seems critical for avoiding impossible capability chains. Should this be mandatory?
2. **Algorithm 1 (Line 15)**: The condition for triggering global replan (`CapabilityChanged() or SignificantTopoChange()`) needs more formal specification. What constitutes "significant"?
3. **Theorem 1**: The proof relies on B¨uchi automaton product construction but doesn't discuss how partial observability affects the accepting run existence guarantee

**Recommendation**: Add a supplementary appendix with detailed proofs and a more formal specification of replan triggers.

---

### 2. NOVELTY AND SIGNIFICANCE (Score: 8.5/10)

**Strengths:**
- **First Framework for Dual Reactivity**: To the best of my knowledge, this is indeed the first work to jointly handle environmental AND capability changes during LTL-constrained execution
- **Practical Impact**: The problem is highly relevant to real-world applications (disaster response, construction, exploration)
- **Substantial Performance Gains**: 99% success rate vs. 18% (static) and 92% (single-reactive) demonstrates significant practical value
- **Clear Research Gap**: The introduction effectively motivates why existing reactive synthesis (environment-only) and capability-aware planning (offline-only) are insufficient

**Novelty Assessment:**
- The capability evolution model (Definition 2) is novel and well-designed
- The hierarchical replanning strategy (fast local vs. global resynthesis) is an elegant architectural contribution
- The integration with existing LTL synthesis tools is pragmatic

**Weaknesses:**
- Some components (B¨uchi automaton product, graph search algorithms) are standard
- The paper could better discuss the relationship to PDDL planning with conditional effects

**Recommendation**: Add a comparison table with related work highlighting specific differences in problem formulation and solution approach.

---

### 3. EXPERIMENTAL VALIDATION (Score: 7/10)

**Strengths:**
- **Comprehensive Simulation**: 100 trials across 10 scenarios with systematic complexity progression (30×30 → 80×80, 10% → 30% obstacles)
- **Multiple Baselines**: Comparison with static planning, single-reactive (environment-only), and DRP-fullmap variants
- **Hardware Validation**: 20 Gazebo hardware-in-the-loop trials demonstrate practical feasibility
- **Statistical Rigor**: Success rates, completion times, path lengths all reported with clear metrics
- **Ablation Study**: The comparison between DRP and DRP-fullmap validates the fast local reallocation strategy

**Weaknesses:**
- **Limited Scale**: Only 2 robots tested. How does coordination complexity grow with team size?
- **Scenario Diversity**: All scenarios follow similar structure (search → acquire → use capability chain). Need more diverse task structures
- **Real Hardware Gap**: Gazebo simulation, while valuable, is not actual hardware deployment
- **Missing Metrics**:
  - Replanning frequency and computation time distribution
  - Memory usage for B¨uchi automaton storage
  - Communication bandwidth requirements for shared map
- **Statistical Analysis**: No confidence intervals, standard deviations, or significance tests reported

**Specific Experimental Concerns:**
1. **Figure 4 (Combined Performance)**:
   - Excellent visualization with Nature color scheme
   - Task success rate subplot shows 100% for all scenarios - consider removing or combining with other metrics
   - Would benefit from error bars on exploration rate and steps

2. **Comparison Scenarios (1-12)**:
   - Strong design with "no evolution" vs "evolution required" groups
   - LTL formulas correctly encode dependencies
   - However, why do some "no evolution" scenarios (2,3,4,5,6) still have partial dependencies? This seems inconsistent with the grouping rationale

3. **Missing Experiments**:
   - Failure mode analysis: What causes the 1% failure in simulation?
   - Robustness to sensor noise and localization errors
   - Scalability study: 3-5 robots, 20-50 tasks

**Recommendation**:
- Add statistical analysis (mean ± std, significance tests)
- Include at least one 3-robot scenario
- Provide detailed failure case study
- Add computational performance metrics (replan time, memory)

---

### 4. PRESENTATION AND CLARITY (Score: 7.5/10)

**Strengths:**
- **Well-Structured**: Logical flow from motivation → formulation → method → experiments
- **Clear Writing**: Generally easy to follow with good use of examples
- **Excellent Figures**:
  - Figure 1 provides strong motivation
  - Figure 4 (combined performance chart) is publication-quality
  - Website with interactive visualizations is exemplary
- **Formal Notation**: Consistent and well-defined mathematical notation

**Weaknesses:**
- **Dense Formalism**: Section II has high definition density - could benefit from more intuitive explanations
- **Algorithm Presentation**: Algorithm 1 mixes high-level logic with implementation details
- **Missing Intuition**: Some formal concepts (e.g., product automaton) lack intuitive explanation
- **Figure Quality**: Some figures could be larger/clearer (especially automaton diagrams)

**Specific Presentation Issues:**
1. **Abstract**: Excellent summary but slightly long (200+ words). Consider trimming to 150-175 words
2. **Introduction**: Very strong motivation and clear contributions. Well done.
3. **Section III (Method)**:
   - Clear overview but Algorithm 1 could be split into sub-algorithms
   - The distinction between "minor topological changes" and "significant changes" needs clearer specification
4. **Section IV (Experiments)**:
   - Experimental design is clear
   - Results presentation is good but lacks statistical depth
   - The case study (exp1) is helpful but could be more detailed

**Minor Issues:**
- Line breaks and hyphenation need checking
- Some citations are incomplete (e.g., missing page numbers)
- Notation inconsistency: sometimes $\mathcal{C}_i(t)$, sometimes $\mathcal{C}_i^t$

**Recommendation**:
- Add intuitive explanations after formal definitions
- Improve algorithm formatting
- Add a "computational performance" table

---

### 5. RELATED WORK (Score: 7/10)

**Strengths:**
- **Comprehensive Coverage**: Good coverage of LTL synthesis, reactive planning, and heterogeneous coordination
- **Clear Gap Identification**: Effectively argues that no existing work handles dual reactivity
- **Recent References**: Includes 2023-2024 citations

**Weaknesses:**
- **Limited PDDL Discussion**: Should discuss relationship to conditional planning in PDDL
- **Missing Work**: No mention of:
  - Contingent planning literature
  - Online POMDP solving
  - Reinforcement learning for multi-agent coordination
- **Comparison Depth**: Could provide more detailed comparison with CaTL/CaTL+ and VarCICS

**Recommendation**: Add a related work table and discuss connections to broader planning literature

---

### 6. IMPACT AND REPRODUCIBILITY (Score: 8/10)

**Strengths:**
- **Open Resources**: Website with visualizations, animations, and LTL specifications
- **Clear Methodology**: Algorithm and system architecture are well-described
- **Practical Applicability**: Framework can be integrated with existing LTL synthesizers

**Weaknesses:**
- **Code Availability**: No mention of releasing implementation code
- **Parameter Settings**: Some algorithm parameters not fully specified
- **Hardware Setup**: Gazebo configuration details are sparse

**Recommendation**:
- Commit to releasing code upon acceptance
- Add supplementary material with full parameter specifications
- Provide Docker container for reproducibility

---

## DETAILED COMMENTS BY SECTION

### Abstract
- **Issue**: Slightly exceeds typical RA-L abstract length
- **Suggestion**: Trim to 150-175 words by condensing results summary

### Introduction
- **Strength**: Excellent motivation with concrete examples
- **Strength**: Clear articulation of research gap
- **Minor**: The "game-changing opportunities" phrase is a bit informal

### Preliminaries (Section II)
- **Issue**: High density of definitions - 6 definitions in quick succession
- **Suggestion**: Add intuitive explanation paragraphs between formal definitions
- **Question**: Definition 2 - why is `pre()` optional? Seems essential for soundness

### Method (Section III)
- **Strength**: Hierarchical architecture is well-motivated
- **Issue**: Algorithm 1 is dense - consider splitting or adding pseudo-code comments
- **Question**: Line 15 - how is "SignificantTopoChange()" computed? Threshold?
- **Suggestion**: Add complexity analysis table comparing replan strategies

### Experiments (Section IV)
- **Strength**: Good variety of scenarios with systematic complexity progression
- **Issue**: Limited to 2 robots - scalability unclear
- **Issue**: No statistical significance testing
- **Suggestion**: Add failure mode analysis subsection

### Conclusion
- **Strength**: Concise summary of contributions
- **Suggestion**: Be more specific about "ongoing work" - what exactly?

---

## SPECIFIC TECHNICAL QUESTIONS FOR AUTHORS

1. **Capability Model**: How would the framework handle probabilistic capability acquisition (e.g., tool retrieval with 80% success rate)?

2. **Scalability**: What is the practical limit on team size and task count? Have you tested with >2 robots?

3. **Communication**: How does the framework handle communication delays or failures in distributed execution?

4. **Robustness**: The 99% success rate in simulation is impressive. Can you characterize the 1% failure cases?

5. **Comparison to PDDL**: How does DRP compare to conditional planning in PDDL with conditional effects?

6. **Real-time Guarantees**: Can you provide worst-case bounds on replan computation time?

7. **Multi-robot Dependencies**: How does the framework handle tasks requiring simultaneous execution by multiple robots?

---

## MINOR CORRECTIONS AND TYPOS

1. **Abstract, Line 3**: "Double‑Reactive" - hyphen encoding issue
2. **Section II-A**: Inconsistent notation $\mathcal{C}_i(t)$ vs $\mathcal{C}_i^t$
3. **Algorithm 1, Line 8**: "BuildProductAutomaton" - consider adding algorithm reference
4. **Figure 4 caption**: "exploration coverage" could be more precisely defined
5. **References**: Several incomplete (missing page numbers, DOIs)

---

## RECOMMENDATION FOR ACCEPTANCE

### Strengths Summary:
1. Novel problem formulation addressing a real gap in the literature
2. Solid theoretical foundations with formal guarantees
3. Elegant hierarchical solution architecture
4. Comprehensive experimental validation (100 sim + 20 hardware trials)
5. Significant performance improvements over baselines
6. Excellent presentation quality (website, visualizations)

### Required Revisions (Minor):
1. Add detailed proof appendix for Theorems 1-2
2. Provide statistical analysis (means, std dev, significance tests)
3. Include at least one 3-robot scenario experiment
4. Add computational performance metrics (replan time, memory)
5. Clarify the "SignificantTopoChange" threshold specification
6. Discuss failure modes in detail
7. Add related work comparison table

### Optional Improvements:
1. Extend to real hardware validation (beyond Gazebo)
2. Discuss probabilistic capability extension
3. Add communication failure handling
4. Release implementation code

---

## FINAL VERDICT

This is **strong work** that makes a clear contribution to the field. The problem is well-motivated, the solution is technically sound, and the experimental validation is thorough. The hierarchical replanning strategy is an elegant solution that balances reactivity with computational efficiency. The performance gains (99% vs 18%/92% success, 47% time reduction) are substantial and practically meaningful.

The main weaknesses are: (1) limited scalability analysis beyond 2 robots, (2) lack of statistical rigor in results presentation, and (3) some implementation details that need clarification. However, these are all addressable through minor revisions.

I recommend **ACCEPT WITH MINOR REVISIONS**. With the suggested improvements, this paper will make an excellent contribution to RA-L and will likely be well-cited in the multi-robot planning community.

---

## SCORING BREAKDOWN

| Criterion | Score | Weight | Weighted Score |
|-----------|-------|--------|----------------|
| Technical Quality | 8.0/10 | 30% | 2.40 |
| Novelty/Significance | 8.5/10 | 25% | 2.13 |
| Experimental Validation | 7.0/10 | 25% | 1.75 |
| Presentation | 7.5/10 | 15% | 1.13 |
| Related Work | 7.0/10 | 5% | 0.35 |
| **Total** | **-** | **100%** | **7.76/10** |

**Rounded Overall Score: 7.5/10**

---

## REVIEWER CONFIDENCE

**High Confidence** - I am familiar with LTL synthesis, reactive planning, and heterogeneous robot coordination literature. I have carefully read the paper and supplementary materials (website, visualizations). I believe my assessment is accurate, though I acknowledge the authors may have additional insights on scalability limits and implementation details that could affect the final evaluation.

---

*Reviewer: Anonymous*
*Date: November 2025*
*Venue: IEEE Robotics and Automation Letters (RA-L)*
