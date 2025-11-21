# Symbol Verification Report for DRP Manuscript

## Executive Summary
This report systematically checks all mathematical symbols used in the manuscript for:
1. **Formula errors** - Mathematical correctness
2. **Symbol reuse** - Same symbol representing different meanings
3. **Missing definitions** - Symbols used without explanation

---

## Complete Symbol Inventory

### 1. Robot Team Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\mathcal{R}$ | Line 169 | Robot team set | ✓ Defined |
| $r_i$ | Line 169 | Individual robot | ✓ Defined |
| $n$ | Line 169 | Number of robots | ✓ Defined |
| $x_i(t)$ | Line 215 | State of robot $r_i$ at time $t$ | ✓ Defined |

**Status**: ✅ All robot notation properly defined

---

### 2. Capability Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\mathcal{C}$ | Line 169 | Capability sets (generic) | ⚠️ **AMBIGUOUS** - used for both generic capabilities and specific robot capabilities |
| $\mathcal{C}_i(t)$ | Def 1, Line 178 | Time-varying capability set of robot $r_i$ | ✓ Defined |
| $\mathcal{C}_i^{\mathrm{base}}$ | Def 1, Line 179 | Base (inherent) capabilities | ✓ Defined |
| $\mathcal{C}_i^{\mathrm{learned}}(t)$ | Def 1, Line 180 | Learned capabilities | ✓ Defined |
| $\mathcal{C}^{\mathrm{potential}}$ | Def 1, Line 180 | Universe of learnable capabilities | ✓ Defined |
| $\mathcal{C}^{\mathrm{all}}$ | Def 1, Line 183 | Universe of all capabilities | ✓ Defined |
| $\mathcal{C}(t)$ | Def 2, Line 191 | **REUSED** - Generic capability set in transition function | ⚠️ **SYMBOL REUSE** |
| $\mathcal{C}(t+1)$ | Def 2, Line 192 | Updated capabilities | ⚠️ **SYMBOL REUSE** |
| $\mathcal{C}$ | Def 2, Line 196 | Generic capability set in precondition | ⚠️ **SYMBOL REUSE** |

**Critical Issues**:
1. **Symbol Reuse**: $\mathcal{C}$ used both as generic placeholder and specific robot capability
2. **Ambiguity in Definition 2**: Lines 191-192 use $\mathcal{C}(t)$ without subscript $i$, making it unclear which robot's capabilities are being updated

**Recommendation**:
- In Definition 2, replace $\mathcal{C}(t)$ with $\mathcal{C}_r(t)$ to explicitly indicate it's the capability set of robot $r$
- Line 192 should be: $\mathcal{C}_r(t+1) = \mathcal{C}_r(t) \cup \gamma(r, \mathcal{C}_r(t), \pi)$

---

### 3. Environment Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\mathcal{T}$ | Def 3, Line 205 | Partially Observable weighted Transition System | ✓ Defined |
| $X$ | Def 3, Line 207 | Continuous state space | ✓ Defined |
| $X_0$ | Def 3, Line 208 | Initial states | ✓ Defined |
| $\to_{\mathcal{T}}$ | Def 3, Line 209 | Feasible transitions | ✓ Defined |
| $w_{\mathcal{T}}$ | Def 3, Line 210 | Transition cost function | ✓ Defined |
| $\mathcal{AP}$ | Line 169, Def 3 Line 211 | Atomic propositions | ✓ Defined (twice) |
| $L$ | Def 3, Line 212 | Labeling function | ✓ Defined |
| $\mathcal{T}_{\text{known}}(t)$ | Def 3, Line 215 | Known environment at time $t$ | ✓ Defined |
| $\mathcal{V}_i$ | Def 3, Line 215 | Visibility function of robot $r_i$ | ✓ Defined |
| $X_{\text{known}}(t)$ | Def 3, Line 216 | Known state space at time $t$ | ✓ Defined |
| $d$ | Def 3, Line 207 | Dimension of state space | ❌ **NOT EXPLAINED** |

**Critical Issues**:
1. **Missing Explanation**: $d$ in $X \subseteq \mathbb{R}^d$ is never explained (though context makes it clear as dimension)
2. **Minor**: $L^{-1}(\pi)$ is used later (line 328, 362) without defining the inverse labeling function notation

**Recommendation**:
- Add brief explanation: "$d$-dimensional state space" in Definition 3
- Add notation: "$L^{-1}(\pi) = \{x \in X : \pi \in L(x)\}$ denotes states labeled with $\pi$"

---

### 4. LTL Specification Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\Diamond$ | Line 169 | Eventually (LTL operator) | ✓ Defined |
| $\square$ | Line 169 | Always (LTL operator) | ✓ Defined |
| $\mathcal{U}$ | Line 169 | Until (LTL operator) | ✓ Defined |
| $\Phi_c$ | Def 4, Line 221 | Capability-constrained LTL specification | ✓ Defined |
| $\varphi$ | Def 4, Line 222 | LTL formula | ✓ Defined |
| $\rho$ | Def 4, Line 224 | Capability requirement function | ✓ Defined |
| $\delta$ | Def 4, Line 225 | Task dependencies | ✓ Defined |
| $\pi$ | Throughout | Atomic proposition (task) | ✓ Defined (implicitly as element of $\mathcal{AP}$) |
| $\pi_i, \pi_j$ | Various | Specific atomic propositions | ✓ Defined |

**Status**: ✅ All LTL notation properly defined

---

### 5. Allocation and Execution Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\sigma$ | Def 5, Line 231 | Allocation policy | ✓ Defined |
| $\sigma(t, \pi)$ | Def 5, Line 231 | Robot assigned to task $\pi$ at time $t$ | ✓ Defined |
| $\perp$ | Def 5, Line 231 | Unassigned task marker | ✓ Defined |
| $\tau_i$ | Problem 1, Line 239 | Trajectory of robot $r_i$ | ✓ Defined |
| $t_{\text{exec}}(\pi)$ | Problem 1, Line 243 | Execution time of task $\pi$ | ❌ **NOT FORMALLY DEFINED** |

**Critical Issues**:
1. **Missing Definition**: $t_{\text{exec}}(\pi)$ is used in Problem 1 (line 243) but never formally defined
   - Context suggests: "the time step when task $\pi$ is completed"
   - Should be defined: $t_{\text{exec}}(\pi) = \min\{t : \exists r_i, x_i(t) \in L^{-1}(\pi)\}$

**Recommendation**:
- Add definition after Definition 5: "Let $t_{\text{exec}}(\pi)$ denote the time step when task $\pi$ is first satisfied"

---

### 6. Cost Function Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $J$ | Problem 1, Line 244 | Total cost | ✓ Defined |
| $w_{\mathcal{T}}(x,x')$ | Def 3, Line 210 | Transition cost | ✓ Defined |
| $T_{\text{completion}}$ | Problem 1, Line 244 | Mission completion time | ✓ Defined |
| $\alpha, \beta$ | Problem 1, Line 244 | Weighting factors | ✓ Defined |
| $\hat{J}$ | Section 3.2, Line 361 | Estimated cost | ✓ Defined |
| $J_{\text{direct}}$ | Line 362 | Direct execution cost | ✓ Defined |
| $J_{\text{acq}}$ | Line 363 | Acquisition cost | ✓ Defined |
| $d_w$ | Line 362 | Weighted distance | ❌ **NOT DEFINED** |
| $C_{\text{acq}}$ | Line 364 | Capability acquisition cost | ❌ **NOT DEFINED** |

**Critical Issues**:
1. **Missing Definition**: $d_w(x_i(0), x)$ appears in line 362 without definition
   - Context suggests: weighted shortest path distance using $w_{\mathcal{T}}$
   - Should define: "Let $d_w(x, x')$ denote the shortest weighted path cost in $\mathcal{T}_{\text{known}}$ using weights $w_{\mathcal{T}}$"

2. **Missing Definition**: $C_{\text{acq}}(\pi_a)$ in line 364 is never defined
   - Context suggests: cost to execute acquisition task $\pi_a$
   - Should define or state: "where $C_{\text{acq}}(\pi_a)$ is the execution cost of the acquisition task"

**Recommendation**:
- Before Section 3.2, add: "For brevity, we denote by $d_w(x, x')$ the minimum weighted path cost from $x$ to $x'$ in $\mathcal{T}_{\text{known}}$, and $C_{\text{acq}}(\pi)$ represents the execution cost of task $\pi$."

---

### 7. Automaton Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\mathcal{A}_\varphi$ | Section 3.2, Line 356 | DFA for LTL formula $\varphi$ | ✓ Defined |
| $Q$ | Line 356 | DFA state set | ✓ Defined |
| $2^{\mathcal{AP}}$ | Line 356 | DFA alphabet (power set of atomic propositions) | ✓ Defined |
| $q_0$ | Line 356 | Initial DFA state | ✓ Defined |
| $\Delta$ | Line 356 | DFA transition function | ✓ Defined |
| $F$ | Line 356 | Accepting states | ✓ Defined |

**Status**: ✅ All automaton notation properly defined

---

### 8. Planning State Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\mathcal{S}(t)$ | Def 6, Line 283 | Planning state at time $t$ | ✓ Defined |
| $\mathcal{P}(t)$ | Def 6, Line 291 | Pending tasks | ✓ Defined |

**Status**: ✅ All planning state notation properly defined

---

### 9. Replanning Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\theta$ | Def 7, Line 408 | Cost reduction threshold | ✓ Defined |
| $\text{Cost}_{\text{new}}$ | Def 7, Line 408 | New cost estimate | ⚠️ **INFORMAL NOTATION** |
| $\text{Cost}_{\text{old}}$ | Def 7, Line 408 | Old cost estimate | ⚠️ **INFORMAL NOTATION** |

**Issues**:
1. **Informal Notation**: $\text{Cost}_{\text{new}}(\mathcal{T}_{\text{known}}(t))$ is intuitive but not formally defined
   - Should clarify: "the estimated total mission cost under the current map"

**Recommendation**:
- Rewrite Definition 7 part 2 more formally or add clarifying text

---

### 10. Algorithm-Specific Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\Pi_i^{\text{sat}}$ | Alg 1, Line 328 | Satisfied propositions for robot $r_i$ | ✓ Clear from context |
| $\Pi_{\text{exec}}$ | Alg 2, Line 376 | Executable tasks | ✓ Clear from context |
| $G_\delta$ | Alg 2, Line 377 | Dependency graph | ✓ Clear from context |
| $\Pi_{\text{ordered}}$ | Alg 2, Line 378 | Topologically ordered tasks | ✓ Clear from context |
| $\mathcal{R}_{\text{capable}}$ | Alg 2, Line 380 | Capable robot set | ✓ Clear from context |
| $r^*$ | Alg 2, Line 381 | Optimal robot assignment | ✓ Clear from context |

**Status**: ✅ All algorithm notation clear from context

---

### 11. Proof Notation

| Symbol | Definition Location | Meaning | Issues |
|--------|---------------------|---------|--------|
| $\xi$ | Theorem 1 Proof, Line 482 | Execution trace | ✓ Defined in proof |
| $\xi_t$ | Line 482 | Trace at time $t$ | ✓ Defined in proof |
| $J_{\text{current}}$ | Line 492 | Current cost | ❌ **NOT DEFINED** |
| $J_{\text{best}}$ | Line 492 | Best known cost | ❌ **NOT DEFINED** |
| $J^*$ | Line 505 | Optimal cost | ✓ Clear from context |
| $\epsilon$ | Line 505 | Accuracy parameter | ✓ Clear from context |
| $T^*$ | Line 503 | Time when all capabilities acquired | ✓ Clear from context |

**Issues**:
1. **Informal Notation**: $J_{\text{current}}$ and $J_{\text{best}}$ in line 492 (Requirement 4 of soundness proof) are not formally defined
   - These should be clarified or the proof text should be more explicit

**Recommendation**:
- In proof line 492, clarify: "where $J_{\text{current}}$ denotes the cost of the current plan and $J_{\text{best}}$ is the estimated optimal cost under current knowledge"

---

## Critical Symbol Reuse Issues

### Issue 1: Capability Set Notation $\mathcal{C}$

**Problem**: The symbol $\mathcal{C}$ is overloaded with multiple meanings:

1. **Line 169**: Generic "capability sets" (plural, abstract)
2. **Definition 1 (Line 178)**: $\mathcal{C}_i(t)$ - time-varying capability set of robot $r_i$
3. **Definition 2 (Lines 191-192)**: $\mathcal{C}(t)$ - used without subscript in transition function
4. **Definition 2 (Line 196)**: $\mathcal{C}$ - generic capability set in precondition function

**Confusion**: In Definition 2, the formula uses $\mathcal{C}(t)$ without subscript, making it ambiguous:
```
γ: R × 2^{C^all} × AP → 2^{C^potential}
When robot r ∈ R with capabilities C(t) satisfies π at time t, its capabilities are updated as
C(t+1) = C(t) ∪ γ(r, C(t), π)
```

**This should be**:
```
When robot r ∈ R with capabilities C_r(t) satisfies π at time t, its capabilities are updated as
C_r(t+1) = C_r(t) ∪ γ(r, C_r(t), π)
```

**Recommendation**: Add subscript $r$ to make explicit that this is the capability set of the robot $r$ passed as the first argument to $\gamma$.

---

### Issue 2: State Space Notation

**Minor Issue**: $X$ is used both for the continuous state space (Def 3, Line 207) and for individual states $x, x'$ throughout.

**Status**: This is standard mathematical practice and causes no confusion. ✅ Acceptable

---

## Missing Definitions Summary

### High Priority (Used in formal definitions or theorems)

1. **$d$** (Line 207): Dimension of state space $X \subseteq \mathbb{R}^d$
   - **Fix**: Add "(where $d$ is the spatial dimension)" or just use $\mathbb{R}^2$ or $\mathbb{R}^3$ explicitly

2. **$t_{\text{exec}}(\pi)$** (Line 243): Execution time of task $\pi$
   - **Fix**: Add definition: "Let $t_{\text{exec}}(\pi) = \min\{t : \exists r_i, x_i(t) \in L^{-1}(\pi)\}$ denote when task $\pi$ is first satisfied"

3. **$d_w(x, x')$** (Line 362): Weighted distance function
   - **Fix**: Add: "Let $d_w(x, x')$ denote the minimum cost path from $x$ to $x'$ in $\mathcal{T}_{\text{known}}$ using transition costs $w_{\mathcal{T}}$"

4. **$C_{\text{acq}}(\pi)$** (Line 364): Capability acquisition cost
   - **Fix**: Add: "where $C_{\text{acq}}(\pi)$ represents the execution cost of capability acquisition task $\pi$"

5. **$L^{-1}(\pi)$** (Line 328, 362): Inverse labeling function
   - **Fix**: Add: "We write $L^{-1}(\pi) = \{x \in X : \pi \in L(x)\}$ for the set of states labeled with proposition $\pi$"

### Medium Priority (Used informally in proofs or algorithms)

6. **$J_{\text{current}}, J_{\text{best}}$** (Line 492): Current and best costs
   - **Fix**: Clarify in proof or use more formal notation

7. **$\text{Cost}_{\text{new}}, \text{Cost}_{\text{old}}$** (Line 408): New and old cost estimates
   - **Fix**: Use more formal notation or add explanatory text

---

## Formula Errors

### Potential Error 1: Definition 2 Capability Update

**Location**: Lines 191-192

**Current Formula**:
$$\mathcal{C}(t+1) = \mathcal{C}(t) \cup \gamma(r, \mathcal{C}(t), \pi)$$

**Issue**: The notation $\mathcal{C}(t)$ without subscript is ambiguous. Should be $\mathcal{C}_r(t)$ to indicate it's the capability set of robot $r$.

**Corrected Formula**:
$$\mathcal{C}_r(t+1) = \mathcal{C}_r(t) \cup \gamma(r, \mathcal{C}_r(t), \pi)$$

---

### Potential Error 2: Cost Function in Problem Statement

**Location**: Line 244

**Current Formula**:
$$J = \alpha \sum_{i=1}^n \sum_{(x,x') \in \tau_i} w_{\mathcal{T}}(x,x') + \beta T_{\text{completion}}$$

**Issue**: The trajectory $\tau_i$ is not formally defined as a set of transitions. The notation $(x, x') \in \tau_i$ suggests $\tau_i$ is a set of edges, but $\tau_i$ was introduced (line 239) as just "trajectories" without formal structure.

**Clarification Needed**: Earlier in Definition 3 or Problem 1, should state:
"A trajectory $\tau_i$ is a sequence of states $(x_0, x_1, \ldots, x_T)$ where $(x_t, x_{t+1}) \in {\to_{\mathcal{T}}}$. We identify $\tau_i$ with its edge set $\{(x_t, x_{t+1}) : 0 \le t < T\}$ for cost computation."

---

### Potential Error 3: Set Notation in Definition 6

**Location**: Line 291

**Current Formula**:
$$\mathcal{P}(t)=\{\pi \in \mathcal{AP} : \forall r_i,\, \rho(\pi)\not\subseteq \mathcal{C}_i(t)\}$$

**Issue**: This is correct but could be misread. It means "all tasks $\pi$ such that for all robots $r_i$, the requirements are NOT satisfied". This is correct.

**Status**: ✅ Correct (though verbose, could write: "tasks executable by no robot")

---

## Recommendations Summary

### Critical Fixes Required

1. **Definition 2 (Lines 191-192)**: Replace $\mathcal{C}(t)$ with $\mathcal{C}_r(t)$
   ```latex
   When a robot $r \in \mathcal{R}$ with capabilities $\mathcal{C}_r(t)$ satisfies an atomic
   proposition $\pi$ at time $t$, its capabilities are updated as
   $\mathcal{C}_r(t+1) = \mathcal{C}_r(t) \cup \gamma\big(r, \mathcal{C}_r(t), \pi\big).$
   ```

2. **Add missing definitions** (in Preliminaries section after Definition 3):
   ```latex
   \textbf{Notation:} We write $L^{-1}(\pi) = \{x \in X : \pi \in L(x)\}$ for the set of
   states labeled with proposition $\pi$. Let $d_w: X \times X \to \mathbb{R}^+$ denote the
   minimum weighted path cost in $\mathcal{T}_{\text{known}}$ using transition costs $w_{\mathcal{T}}$.
   ```

3. **Add definition for execution time** (after Definition 5):
   ```latex
   Let $t_{\text{exec}}(\pi) = \min\{t \in \mathbb{N} : \exists i, x_i(t) \in L^{-1}(\pi)\}$
   denote the time step when task $\pi$ is first satisfied.
   ```

4. **Clarify trajectory structure** (in Definition 3 or Problem 1):
   ```latex
   A trajectory $\tau_i = (x_0^i, x_1^i, \ldots, x_T^i)$ is a sequence of states with
   $(x_t^i, x_{t+1}^i) \in {\to_{\mathcal{T}}}$ for all $t$.
   ```

### Minor Improvements

5. **Section 3.2, before line 361**: Add brief explanation of $C_{\text{acq}}$:
   ```latex
   where $C_{\text{acq}}(\pi_a)$ denotes the cost to execute the acquisition task $\pi_a$.
   ```

6. **Definition 7 (Line 408)**: Make cost notation more precise or add clarifying text

7. **Proof of Theorem 1 (Line 492)**: Clarify $J_{\text{current}}$ and $J_{\text{best}}$

---

## Conclusion

### Summary of Issues Found

| Category | Count | Severity |
|----------|-------|----------|
| Symbol Reuse (Ambiguous) | 1 | **HIGH** |
| Missing Definitions | 5 | **HIGH** |
| Informal Notation | 2 | MEDIUM |
| Formula Errors | 0 | - |
| Minor Clarifications | 3 | LOW |

### Overall Assessment

The manuscript is **mathematically sound** with no critical formula errors. The main issues are:

1. **Symbol ambiguity** in Definition 2 ($\mathcal{C}(t)$ without subscript)
2. **Missing definitions** for commonly used notation ($d_w$, $t_{\text{exec}}$, $L^{-1}$, $C_{\text{acq}}$)

These are **easily fixable** editorial issues that do not affect the correctness of the theoretical results, but should be addressed for clarity and rigor expected in IEEE RA-L publications.

### Priority Actions

**Must Fix (Before Submission)**:
- Fix Definition 2 capability notation
- Add definitions for $d_w$, $t_{\text{exec}}$, $L^{-1}$

**Should Fix (For Clarity)**:
- Define $C_{\text{acq}}$
- Clarify trajectory structure
- Add notation section after Preliminaries

**Optional (Nice to Have)**:
- Improve Definition 7 notation
- Clarify proof notation
