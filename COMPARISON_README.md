# 三种方法对比实验 - Enhanced Comparison Framework

## 概述 (Overview)

这个增强版的对比实验框架现在包含以下功能：
1. **环境快照** - 每个场景的环境初始状态可视化
2. **GIF动画** - 每个实验(场景×方法)的完整执行过程动画
3. **详细对比图表** - 7个不同角度的对比分析图表

## 使用方法 (Usage)

### 运行完整对比实验
```bash
python run_comparison.py
```

这将执行以下操作：
1. 生成12个场景的环境快照 (snapshots/)
2. 运行36个实验 (12场景 × 3方法)
3. 为每个实验生成GIF动画 (animations/)
4. 生成7个详细对比图表 (figures/)
5. 保存CSV和JSON格式的原始数据 (data/)

## 输出结构 (Output Structure)

```
comparison_results_YYYYMMDD_HHMMSS/
├── snapshots/                          # 环境快照 (12张)
│   ├── nature_simple_simple_environment.png
│   ├── nature_simple_medium_environment.png
│   └── ...
├── animations/                         # 执行动画 (36个GIF)
│   ├── nature_simple_simple_static.gif
│   ├── nature_simple_simple_drp-fullmap.gif
│   ├── nature_simple_simple_drp.gif
│   └── ...
├── figures/                            # 对比图表 (7张)
│   ├── success_rate_heatmap.png       # 1. 成功率热力图
│   ├── method_comparison_bars.png     # 2. 分场景柱状对比
│   ├── execution_steps_comparison.png # 3. 执行步数对比
│   ├── performance_summary.png        # 4. 性能摘要(4个子图)
│   ├── grouped_comparison.png         # 5. 分组对比(需要/不需要演化)
│   ├── correlation_analysis.png       # 6. 相关性分析(探索率vs步数)
│   └── environment_snapshots_grid.png # 7. 环境快照网格展示
└── data/                              # 原始数据
    ├── all_results.csv                # CSV格式
    └── all_results.json               # JSON格式
```

## 三种对比方法 (Three Methods)

### 1. Static (No Evolution)
- **特点**: 机器人能力不可演化
- **预期**: 只能完成不需要能力演化的场景
- **实现**: `--method static`

### 2. DRP-FullMap
- **特点**: DRP方法 + 完全已知地图
- **预期**: 无需探索，直接执行任务
- **实现**: `--method drp-fullmap`

### 3. DRP (Full Method)
- **特点**: 完整DRP方法(能力演化 + 地图探索)
- **预期**: 所有场景都能完成
- **实现**: `--method drp`

## 场景设计 (Scenario Design)

### 组1：不需要能力演化 (6个场景)
1. `nature_simple_simple` - 简单环境 + 简单任务
2. `nature_simple_medium` - 简单环境 + 中等任务
3. `nature_medium_simple` - 中等环境 + 简单任务
4. `nature_medium_medium` - 中等环境 + 中等任务
5. `nature_complex_simple` - 复杂环境 + 简单任务
6. `nature_complex_medium` - 复杂环境 + 中等任务

**设计思路**: 这些场景的任务都可以用机器人初始能力完成，但有能力演化会更快完成。

### 组2：必须能力演化 (6个场景)
1. `nature_simple_complex` - 简单环境 + 复杂任务
2. `nature_simple_verylong` - 简单环境 + 超长任务链
3. `nature_medium_complex` - 中等环境 + 复杂任务
4. `nature_medium_verylong` - 中等环境 + 超长任务链
5. `nature_complex_complex` - 复杂环境 + 复杂任务
6. `nature_complex_verylong` - 复杂环境 + 超长任务链

**设计思路**: 这些场景包含能力链，必须通过能力演化才能完成所有任务。

## 生成的图表详解 (Generated Figures)

### 图1: 成功率热力图 (success_rate_heatmap.png)
- 12个场景 × 3个方法的成功率热力图
- 颜色从红(0%)到绿(100%)
- 直观展示哪些方法在哪些场景表现好

### 图2: 分场景柱状对比 (method_comparison_bars.png)
- 每个场景的三种方法并排对比
- 清楚看出方法间的差异
- 包含数值标签

### 图3: 执行步数对比 (execution_steps_comparison.png)
- 比较不同方法的执行效率
- 步数越少说明效率越高

### 图4: 性能摘要 (performance_summary.png)
包含4个子图：
- 平均成功率
- 平均执行步数
- 100%成功的场景数量
- 平均探索率

### 图5: 分组对比 (grouped_comparison.png)
- 左图：不需要演化场景的平均成功率
- 右图：需要演化场景的平均成功率
- 突出展示能力演化的重要性

### 图6: 相关性分析 (correlation_analysis.png)
- 左图：探索率 vs 执行步数
- 右图：成功率 vs 执行步数
- 散点图展示变量间关系

### 图7: 环境快照网格 (environment_snapshots_grid.png)
- 4×3网格展示所有12个场景的环境初始状态
- 包括障碍物、机器人位置、任务位置

## 技术细节 (Technical Details)

### 环境快照生成
```python
save_environment_snapshot(scenario, output_dir, seed=42)
```
- 加载场景初始状态
- 使用PremiumLightVisualizer渲染
- 保存为高清PNG图像

### GIF动画生成
```python
run_single_experiment(scenario, method, output_dir,
                     max_steps=2000, seed=42,
                     save_animation=True)
```
- 使用main.py的--save-animation功能
- 参数：10 FPS, 跳过3帧, 100 DPI
- 自动重命名为{scenario}_{method}.gif

### 图表生成
```python
generate_comparison_figures(results_df, output_dir)
```
- 使用matplotlib和seaborn样式
- 统一配色方案(红/蓝/绿)
- 150 DPI高质量输出

## 预期实验结果 (Expected Results)

基于场景设计，预期结果应该是：

| Method | 组1成功率 | 组2成功率 | 总体成功率 |
|--------|----------|----------|-----------|
| Static | ~100% | ~0% | ~50% |
| DRP-FullMap | 100% | 100% | 100% |
| DRP | 100% | 100% | 100% |

**关键发现**:
1. Static方法只能完成不需要能力演化的场景
2. DRP-FullMap展示完全地图知识的优势(无需探索)
3. DRP完整方法能应对所有场景

## 实验时间估计 (Estimated Runtime)

- 环境快照生成: ~1-2分钟 (12个场景)
- 单个实验: ~20-60秒
- 总实验时间: ~20-40分钟 (36个实验)
- GIF生成: 包含在实验时间内
- 图表生成: ~10秒

**总计**: 约 25-45 分钟完成所有实验和可视化

## 论文使用建议 (Paper Usage Suggestions)

### 主要图表推荐
1. **图1 (热力图)**: 最直观，适合论文主图
2. **图5 (分组对比)**: 突出能力演化的重要性
3. **图4 (性能摘要)**: 全面展示性能指标

### GIF动画使用
- 选择1-2个代表性场景的动画
- 建议：nature_simple_simple (展示基本功能)
- 建议：nature_complex_verylong (展示复杂场景)

### 环境快照使用
- 图7网格图可用于展示实验设计的多样性
- 单独快照可用于详细说明特定场景

## 故障排除 (Troubleshooting)

### 问题1: 字体警告
```
UserWarning: Glyph XXX missing from font(s)
```
**解决**: 这只是警告，不影响功能。可以忽略或安装完整字体包。

### 问题2: 内存不足
如果系统内存有限，可以：
```bash
# 分批运行，不保存动画
python run_comparison.py --no-animation
```

### 问题3: 超时错误
增加超时时间（在run_comparison.py中修改timeout参数）

## 后续改进建议 (Future Improvements)

1. 添加视频格式支持(MP4)
2. 生成交互式HTML报告
3. 添加统计显著性检验
4. 支持自定义场景参数
5. 并行运行实验加速

---

**版本**: Enhanced v2.0
**更新日期**: 2025-11-16
**作者**: Enhanced DBRP Framework Team
