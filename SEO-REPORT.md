# SEO 分析与拓页规划报告 · Parque San Pío

> 内部规划文档。仅提供文字建议，不代表已对站点实施任何修改。
> 配套文案见 [CONTENT-PLAN.md](./CONTENT-PLAN.md)。

- 目标网站：`parquesanpio.com`
- 景点：Parque San Pío / Saint Pío Park / Parque Guillermo Sorzano González
- 所在地：Cabecera del Llano, Bucaramanga, Santander, Colombia
- 地图参考：`https://maps.app.goo.gl/3t2apWjTJbkW2L4x5` · plus code `4V9Q+CR` · `7.1185637, −73.1104339`
- 分析日期：2026-11-04
- 数据来源：用户提供的 7 份 Google Search Console CSV（以消息内表格形式提供）、仓库现有站点内容、当地政府与文旅机构公开资料（Alcaldía de Bucaramanga、IMCT、Área Metropolitana de Bucaramanga、Santander Travel）

## 0. 范围声明与执行边界

本次未取得名称完全对应的「景点拓页 SEO 接力 Skill v1.1」原始指令文件，仓库内亦无该 Skill 与 GSC CSV 文件；报告数字来自用户消息内粘贴的表格，非本地 CSV 解析，**不声称完成 v1.1 逐条校验**。

执行边界：

- 只提出优化建议，不修改代码、网站内容或部署配置。
- 所有已发布图片必须保留，不删除、不替换，不进行图片版权判断。
- 建议新增至少 30 个具有独立搜索意图的内容页面（实际规划 36 页）。
- 网站继续定位为独立第三方旅游资讯指南，不冒充市政府、公园管理方或官方旅游机构。
- 以西班牙语为首要内容语言，英语作为第二阶段扩展语言。
- 不虚构门票、开放时间、停车场收费、公共交通班次和安全保证。

仓库现状核对（`README.md`、`PHOTO-SOURCES.md`、`VALIDATION.md`、`public/robots.txt`）：

- README 将站点定位为 `guide, in Spanish`；英语 `/en/` 二期若启动，需同步调整该定位描述。
- `PHOTO-SOURCES.md` 记录的历史照片移除发生在本次任务之前，与本次规划无关。
- `VALIDATION.md` 说明逐轮证据存于仓库外，故 GSC 报告不入库属设计如此。
- `public/robots.txt` **已存在且已包含 sitemap 指令**，无需新增或修改（详见第 4 节）。

---

## 1. GSC 数据分析

### 1.1 搜索表现概况

| 指标 | 数值 |
| --- | --- |
| Google 搜索曝光 | 3,651 |
| 自然搜索点击 | 31 |
| 平均 CTR | 0.85% |
| 主要市场 | 哥伦比亚 |

可见日期 2026-09-10 至 2026-11-01。筛选器标注「过去三个月」，但导出图表范围较短，不应视为完整 90 天数据。

网站已获得与景点名称直接相关的搜索曝光，部分主要关键词排名进入前五。**现阶段最重要的问题是：搜索结果有展示，但点击转化不足。** 核心词平均排名约第 3～4 位、CTR 仅约 1%，应优先检查标题、摘要、搜索意图匹配、搜索结果版面，以及 Google 地图结果对自然点击的分流。

### 1.2 设备分析

| 设备 | 点击 | 曝光 | CTR | 平均排名 |
| --- | --- | --- | --- | --- |
| 手机 | 23 | 3,007 | 0.76% | 4.26 |
| 桌面 | 8 | 636 | 1.26% | 3.62 |
| 平板 | 0 | 8 | 0% | 5.38 |

手机占约 82.4% 曝光，是绝对主力。建议：

1. 首页开头直接显示地址、地图导航、游览建议及主要看点。
2. 手机端突出 `Cómo llegar`、`Ver mapa` 两个操作。
3. 交通、照片、附近餐饮、停车内容尽量减少查找步骤。
4. 不要让大段历史介绍挡住访客寻找地址的路径。
5. 控制首屏图片加载负担，但必须保留现有图片。
6. 检查导航按钮是否容易触碰、文字是否易读、地图是否正确打开。

### 1.3 国家与地区分析

| 地区 | 点击 | 曝光 | CTR |
| --- | --- | --- | --- |
| 哥伦比亚 | 29 | 3,553 | 0.82% |
| 美国 | 1 | 19 | 5.26% |
| 墨西哥 | 0 | 24 | 0% |
| 西班牙 | 0 | 11 | 0% |
| 委内瑞拉 | 0 | 9 | 0% |

哥伦比亚约占 97.3% 曝光，因此不建议现阶段大规模扩展多语言版本。优先次序：哥伦比亚西班牙语 → 国际旅客英语（位置、交通、简短指南）→ 其他语言（等待 GSC 持续需求）。

### 1.4 核心搜索关键词

| 搜索词 | 曝光 | CTR | 平均排名 | 优先级 |
| --- | --- | --- | --- | --- |
| parque san pio | 891 | 1.12% | 3.28 | P0 |
| parque san pio bucaramanga | 576 | 0.69% | 3.74 | P0 |
| san pio parque | 127 | 0% | 3.10 | P0 |
| parque san pío | 82 | 1.22% | 6.79 | P0 |
| parque sanpio | 28 | 0% | 3.93 | P1 |
| parque san pío bucaramanga | 27 | 0% | 3.78 | P1 |
| san pio bucaramanga | 24 | 0% | 6.75 | P1 |
| fotos de parque san pio | 19 | 0% | 8.84 | P1 |
| parqueadero san pio | 16 | 0% | 4.38 | P1 |
| parque san pio bucaramanga direccion | 27 | 7.41% | 4.37 | P0 |

三个明确机会：

- **机会 A｜提升品牌型搜索点击率**：`parque san pio` 与 `parque san pio bucaramanga` 合计 1,467 曝光仅 14 点击。优先优化首页搜索摘要，强调地址、交通、照片和附近活动。
- **机会 B｜建立停车与图片专题**：`fotos de parque san pio`、`parqueadero san pio` 已有真实曝光，是数据驱动而非猜测的拓页方向。
- **机会 C｜强化精确地址查询**：`parque san pio bucaramanga direccion` CTR 7.41%，显著高于泛名称词，证明用户希望「找到它、前往它」。交通与到达资讯应成为第一批建设重点。

---

## 2. 首页 SEO 优化

### 2.1 推荐 TDK

- 首选 Title：`Parque San Pío Bucaramanga: Ubicación, Fotos y Cómo Llegar`
- 备选 Title：`Parque San Pío en Bucaramanga | Guía para Visitarlo`
- Meta Description：`Visita el Parque San Pío en Bucaramanga. Consulta su ubicación en Cabecera, cómo llegar, qué ver, fotos y planes para disfrutar de los alrededores.`
- H1：`Parque San Pío en Bucaramanga`

首页以自然说明吸收拼写变体（Parque San Pío / Parque San Pio / San Pío Bucaramanga / Parque San Pío Cabecera / Saint Pío Park），不为每种拼法单独建低价值页面。

### 2.2 建议内容结构

1. H1 → 2. 景点概览（地址、城区、地图、类型）→ 3. Cómo llegar → 4. Qué ver → 5. La escultura de Botero → 6. Fotografías → 7. Alrededores → 8. Restaurantes y cafés → 9. Parqueaderos y transporte → 10. Consejos → 11. FAQ → 12. Fuentes y última revisión。

首页保持总览定位，把具体问题引导至独立页面；避免把长尾关键词堆进首页导致主次不清。

### 2.3 现状对照与数据同步

当前 `src/pages/index.astro` 的 title 为 `Parque San Pío, Bucaramanga: ubicación, acceso y visita`，description 已存在，结构已含 ubicación / visita / movilidad / mapa / alrededores / faq / fuentes，方向正确，仅需微调 TDK。

**待同步项**：首页展示 `4,5 · 16.003 reseñas · 29/10/2026`，用户提供的 2026-11-04 快照为 `4,5 · 16.001 reseñas`。规划文案统一采用 `4,5/5 con 16.001 reseñas` 与 `4 de noviembre de 2026`；需授权改代码后将首页、JSON-LD、FAQ 三处统一，并更新「última revisión」。评分仅页面展示 + Google Maps 外链，不写入 `aggregateRating`。

---

## 3. 建议新增 36 个 SEO 页面

策略不是让每个关键词对应一篇文章，而是围绕不同旅客的实际问题建立独立、可用的内容。所有 URL 均为净新增（当前 `src/pages/` 仅有 `index.astro` 与 `404.astro`），无重复建页风险。逐页完整文案见 `CONTENT-PLAN.md`。

### P0 · 第一批 A｜交通与基础资讯（8 页）

| 编号 | URL | 主题 / 目标关键词 |
| --- | --- | --- |
| 01 | `/ubicacion/` | Ubicación y dirección（Cra. 33 #45 参考、coords、mapa）— `direccion` |
| 02 | `/como-llegar/` | Cómo llegar（a pie / taxi / bus / bicicleta）— `como llegar` |
| 03 | `/parqueadero/` | Parqueadero cercano（无自有停车，验证 entrada/tarifa/cupo）— `parqueadero san pio` |
| 04 | `/fotos/` | Imágenes de la guía（复用已发布 SVG/插图，不新增外部图）— `fotos de parque san pio` |
| 05 | `/horario/` | Horario y acceso（24h 第三方参考，非保证）— `abre las 24 horas` |
| 06 | `/entrada-precio/` | Entrada y costo（公共公园，无已核实票价）— `entrada tiene costo` |
| 07 | `/escultura-botero/` | «Mujer de pie, desnuda»（2010 安装，2013 BIC）— `botero san pio` |
| 08 | `/que-ver/` | Qué ver（árboles、senderos de ladrillo、obras）— `que ver` |

### P0 · 第一批 B｜周边与文化澄清（8 页）

| 编号 | URL | 主题 |
| --- | --- | --- |
| 09 | `/restaurantes-cercanos/` | Comer en Cabecera（核实 sucursal/horario） |
| 10 | `/cafes-cercanos/` | Cafés y dulcerías en Cabecera |
| 11 | `/cabecera-del-llano/` | Qué es Cabecera del Llano（Hub） |
| 12 | `/que-hacer-alrededores/` | Planes en los alrededores（Hub） |
| 13 | `/parque-vs-parroquia/` | Parque San Pío ≠ Parroquia San Pío X |
| 14 | `/historia/` | Guillermo Sorzano、2010 Botero、2013 BIC |
| 15 | `/mejor-epoca-visitar/` | Mejor momento / clima cálido |
| 16 | `/transporte-publico/` | Contexto urbano que alimenta «cómo llegar» |

### P1 · 第二批｜访客需求与路线（10 页）

| 编号 | URL | 主题 |
| --- | --- | --- |
| 17 | `/ruta-a-pie-cabecera/` | Caminata por Cabecera |
| 18 | `/plan-media-jornada/` | Itinerario de media jornada |
| 19 | `/visita-en-pareja/` | Escenario de visita |
| 20 | `/visita-en-familia/` | Visita con niños |
| 21 | `/guia-de-fotografia/` | Luz, encuadre y Botero |
| 22 | `/accesibilidad/` | Movilidad reducida（不宣称认证） |
| 23 | `/visita-cuando-llueve/` | Lluvia y plan de respaldo |
| 24 | `/seguridad-y-precauciones/` | Precauciones urbanas（不提供保证） |
| 25 | `/visita-nocturna/` | Noche e iluminación |
| 26 | `/eventos-y-ferias/` | Feria al Parque（不列日程） |

### P2 · 第三批｜扩展与新主题（10 页）

| 编号 | URL | 主题 |
| --- | --- | --- |
| 27 | `/desde-centro-bucaramanga/` | Desde el centro |
| 28 | `/desde-aeropuerto-palonegro/` | Desde Palonegro / Lebrija |
| 29 | `/hoteles-cerca/` | Alojamiento en Cabecera |
| 30 | `/otros-parques-bucaramanga/` | Parque del Agua、Girón 等 |
| 31 | `/cosas-gratis-bucaramanga/` | Planes sin costo |
| 32 | `/flora-y-arboles/` | 3.000+ plantas ornamentales |
| 33 | `/escultura-mariposa/` | Mariposa donada por Mario Hernández |
| 34 | `/guia-bucaramanga-familiar/` | Hub familiar |
| 35 | `/clima-por-meses/` | Clima cálido，不编造月度数据 |
| 36 | `/atardecer-parque-san-pio/` | Luz de tarde |

### 关键词 → 页面映射

| 来源 | 关键词 | 承接页 |
| --- | --- | --- |
| GSC P0 | parque san pio / bucaramanga / parque san pío / san pio parque | 首页 + 01/02/08 |
| GSC P0 | parque san pio bucaramanga direccion | 01 |
| GSC P1 | fotos de parque san pio | 04 |
| GSC P1 | parqueadero san pio | 03 |
| GSC P1 | parque sanpio / san pio bucaramanga / parque san pío bucaramanga | 首页（拼写吸收）+ 01/02 |
| 衍生 | como llegar / transporte | 02 / 16 / 27 / 28 |
| 衍生 | restaurantes / cafes cabecera | 09 / 10 |
| 衍生 | botero bucaramanga / mujer desnuda | 07 |
| 衍生 | que hacer / rutas / plan | 12 / 17 / 18 |
| 衍生 | pareja / familia / fotos / accesible / lluvia / seguridad / noche | 19–25 |
| 衍生 | hoteles / otros parques / gratis / clima / atardecer | 27–36 |

全部 GSC 词与主要衍生词均有明确归宿，无孤儿关键词。

---

## 4. 技术 SEO 检查清单（P0）

1. **协议 / 主机规范化（已就绪）**：`src/worker.js` 已对 `www.` 前缀与 `http://` 做 308 跳转至 `https://parquesanpio.com`；`astro.config.ts` 的 `site` 已设为该 https 非 www 值，canonical、OG URL 与 sitemap 一致。GSC 同时记录 `http://` 与 `https://` 首页曝光属**历史索引滞后**。建议：在 GSC 对首页做「网址检查 → 请求编入索引」；上线新页后核查全站内链无 `http://` / `www.` 硬编码。
2. **robots.txt（已存在，无需改动）**：`public/robots.txt` 内容为 `User-agent: * / Allow: / / Sitemap: https://parquesanpio.com/sitemap-index.xml`，已正确。**注意：早期草稿曾误写为「建议新增 robots.txt」，此处已更正。** 排期中相应任务删除。
3. **sitemap**：`@astrojs/sitemap` 已启用并过滤 404，新增 36 页后自动收录，无需手改；上线后向 GSC 提交 `sitemap-index.xml`。
4. **内部链接集群**：首页新增 `Guías` 区块，按 A/B/C 三组卡片互链；每子页底部放 `Páginas relacionadas` 与面包屑（`BreadcrumbList` JSON-LD）。
5. **移动端与 Core Web Vitals**：首屏 hero 为 SVG（`park-illustration.svg`），体积轻，保留；首屏不塞大段历史文字，地址/地图/Cómo llegar 前置；按钮触控区 ≥44px。
6. **结构化数据**：子页复用首页 `TouristAttraction/Park/Place`（`@id#park` 不变）+ 各自 `FAQPage` + `BreadcrumbList`；专题页可加 `Article`。不写 `aggregateRating`。
7. **图片**：`public/images/`（3 个）与 `public/icons/`（5 个）共 8 个已发布文件全部保留；新页只复用站内素材，不引入外部照片、不删图、不判断版权。

---

## 5. 统一子页模板（36 页通用骨架）

**`<head>` 区**：`title` = `{具体主题} en Parque San Pío, Bucaramanga`（≤60 字符，句式大写）；`description`（≤155 字符）；`canonical` = `https://parquesanpio.com/{slug}/`；`og:title/description/url/image`（image 复用站内 OG 图）。

**正文顺序**：

1. 面包屑（Inicio › 分组 › 本页）+ `BreadcrumbList`
2. H1（含 Parque San Pío + Bucaramanga）
3. 导语（≤2 句，直击搜索意图）
4. 主体模块（2–4 个）
5. `Antes de salir` 通用提示块
6. 迷你 FAQ（2–3 条，本页专属，不重复首页 8 条）
7. `Páginas relacionadas`（3–5 个内链卡片）
8. `Fuentes y revisión`（沿用首页口径，标注 2026-11-04）

**结构化数据**：`@id#park` 复用 + `FAQPage` + `BreadcrumbList`，澄清/文化页加 `Article`，不写 `aggregateRating`。

**移动端**：首屏只放 H1 + 导语 + 一个主行动（地图/到达）；模块用卡片或折叠；按钮 ≥44px。

---

## 6. 内链集群、锚文本与发布排期

### 6.1 Hub 与锚点

- **3 个 Hub**：`11`（Cabecera）、`12`（Alrededores）、`34`（Familiar）—— 各自聚合一组子页。
- **3 个锚点**：`01`（Ubicación）、`02`（Cómo llegar）、`07`（Botero）—— 被最多页反向链接。
- 每子页「相关页面」至少 1 条指向 Hub、1 条指向锚点、1 条同批次相邻页；超过 5 条按相关性截断。

### 6.2 推荐西语锚文本

| 目标页 | 推荐锚文本 | 避免 |
| --- | --- | --- |
| 01 | `ubicación del Parque San Pío` / `dirección en Cabecera` / `dónde queda el parque` | `la dirección exacta` |
| 02 | `cómo llegar al Parque San Pío` / `llegar en bus o taxi` | `rutas y horarios de bus` |
| 07 | `escultura de Botero` / `«Mujer de pie, desnuda»` | `la Gorda de Botero` |
| 11 | `Cabecera del Llano` / `el sector de Cabecera` | `el barrio oficial` |
| 12 | `qué hacer en los alrededores` | `los mejores planes` |
| 34 | `Bucaramanga en familia` | `planes para niños garantizados` |
| 03 | `parqueadero cercano` | `parqueadero del parque` |
| 04 | `imágenes del parque` / `ilustraciones de la guía` | `fotos reales del parque` |

全站禁用：`haz clic aquí`、`ver más`、`leer más`、裸 URL、同一锚文本指向不同目标页。

### 6.3 逐页发布排期（14 周）

| 周次 | 页面 | 发布后动作 |
| --- | --- | --- |
| 1–2 | 无新页 | 首页 TDK / 评分 / 日期校正；GSC 重新提交首页与 sitemap；`http://` 旧索引刷新；核对既有 `robots.txt`（无需改动） |
| 3 | 01、02 | 承接 `direccion` 与品牌词，首页 `Guías` 先上这两张卡 |
| 4 | 03、04、05 | 承接 `parqueadero san pio`、`fotos de parque san pio` |
| 5 | 06、07、08 | 07 与首页 identidad 段落互链 |
| 6 | 09、10 | 观察第 3–5 周收录，暂不加速 |
| 7 | 11（Hub）、13 | 13 提前：混淆澄清低成本高价值；Hub 先于其聚合页 |
| 8 | 12（Hub）、14 | Hub 就位后回填 09/10/17 反向链接 |
| 9 | 15、16 | 完成 P0 全部 16 页，做全量内链巡检 |
| 10 | 17、18 | 路线页依赖 11/12/09/10 |
| 11 | 19、20、21 | 统一套用迷你 FAQ 模板 |
| 12 | 22、23、24、25、26 | P1 收口；24/25 交叉互链 |
| 13 | 27、28、29、30、31 | P2 启动；27/28 回填至 02 与 16 |
| 14 | 32、33、34（Hub）、35、36 | 36 页完成；34 回填至 20；提交全量 sitemap |

每页上线固定 5 步：① canonical 为 https 非 www → ② 面包屑与相关页内链 → ③ `Antes de salir` / `Fuentes` 齐全 → ④ GSC 请求编入索引 → ⑤ 7 天后查覆盖率。

---

## 7. 英语第二阶段 `/en/`

**启动条件（三条同时满足）**：GSC 连续 8 周出现英语查询曝光；英语/国际曝光占比稳定 >5%；西语 36 页全部收录且内链巡检通过。当前美国 19 次曝光、CTR 5.26% 仅为苗头，未达阈值。

**首批 4 页**：`/en/location/`、`/en/getting-there/`、`/en/botero/`、`/en/photos/`（完整英文文案见 `CONTENT-PLAN.md`）。不整站双语、不机翻。

**hreflang / canonical 文字规则**：

- 西语原页 `hreflang="es-CO"` 自指；有英文对应页时加 `hreflang="en"` 指向 `/en/{slug}/`。
- 英文页 `hreflang="en"` 自指 + `hreflang="es-CO"` 指向西语原页。
- `x-default` 一律指向西语原页；未翻译的西语页只标 `es-CO` + `x-default` 自指，不虚构不存在的英文版。
- `canonical` 各语言页自指向，不跨语言互相 canonical。
- 结构化数据复用全站唯一 `@id#park`；英文页 `alternateName` 保留 `Saint Pío Park`，不新建实体。
- 英文页同样不写 `aggregateRating`，不虚构票价/班次/时间/安全保证。
- **前置项**：`README.md` 当前写明 `guide, in Spanish`，若启动英语二期需同步调整该定位描述。

**第二批**（仅 E1–E4 产生稳定点击后）：`/en/what-to-see/`、`/en/around-cabecera/`、`/en/with-family/`、`/en/faq/`。

---

## 8. 验收指标与监测清单

### 8.1 90 天验收指标

- **0–30 天**：品牌词 `parque san pio` / `parque san pio bucaramanga` CTR 从约 1% 提升至 ≥2.5%。
- **30–60 天**：`fotos de parque san pio`、`parqueadero san pio`、`direccion` 在对应专题页获得曝光与排名（目标前 10）。
- **60–90 天**：36 页中 ≥30 页被收录；总曝光较 3,651 增长 ≥50%；非品牌词（cómo llegar / restaurantes cerca / cabecera del llano）开始贡献点击。
- **质量红线**：不出现编造票价/班次/开放时间；易变数据一律标注「confirmar el mismo día」。

### 8.2 上线后监测

| 频率 | 检查项 | 判据 | 动作 |
| --- | --- | --- | --- |
| 上线后 7 天 | 覆盖率 / 网页索引 | 「已抓取但尚未编入索引」 | 请求编入索引；核查首页可达性 |
| 每 2 周 | 品牌词 CTR | <2.5% | 只改 title / description，一次改一处，观察 14 天 |
| 每月 | 01/03/04/07 带来的查询词 | 新拼写或长尾变体 | 在该页 FAQ 或正文自然吸收，不新建低价值页 |
| 每月 | 连续 8 周零曝光零点击页 | 内链薄弱或意图重叠 | 优先补内链与标题；仍无起色则合并到相邻页，不删除已建页 |
| 每月 | 设备报告 | 手机 CTR 持续低于桌面 | 地址/地图/到达再前置 |
| 每季度 | 国家报告 | 英语/国际曝光 >5% 且连续 8 周 | 启动 `/en/` E1–E4 |
| 每季度 | Core Web Vitals | 移动端退化 | 排查新增资源，不删既有图片，优先压缩与懒加载 |
| 每半年 | 全站数据复核 | 评分、日期、来源链接可用性 | 统一更新 36 页 `Fuentes y revisión` 块 |

迭代红线：任何优化不得为提升点击而加入未经验证的票价、班次、营业时间、「24 小时保证」「安全保证」或官方背书表述。

---

## 9. 逐页合规清单

1. 不删除/替换任何已发布图片；新页只用站内 SVG/图标。
2. 不虚构票价、班次、营业时间、开放状态、安全保证；易变数据加「verifica el mismo día」。
3. 评分仅页面展示 + Maps 外链，不进 `aggregateRating`。
4. canonical / OG 全为 `https://parquesanpio.com`（非 www、非 http）。
5. 西语为首要；英语留作 `/en/` 第二阶段。
6. 第三方独立指南定位，不冒充官方；来源与复核日期（2026-11-04）齐备。
7. 移动端首屏前置地址/地图/到达；按钮 ≥44px。
8. JSON-LD 含 `TouristAttraction` + `Park` + `Place`（`@id#park`）+ `FAQPage` + `BreadcrumbList`。

---

## 10. 复核记录（2026-11-04）

### 10.1 已更正

| 项 | 更正内容 |
| --- | --- |
| robots.txt 误判 | 早期草稿写「建议新增」，实际文件已存在且含 sitemap 指令；改为「无需改动，仅核对」 |
| 首页评分不一致 | 线上 `16.003 / 29-10-2026` vs 规划 `16.001 / 04-11-2026`；列为待授权同步项 |
| README 定位冲突 | `guide, in Spanish` vs 英语二期；列为英语启动前置项 |
| 英文页引号 | `/en/botero/` 的 `«Mujer de pie, desnuda»` 改为英文引号 `"Mujer de pie, desnuda"` |
| 英文页缩写 | `IMCT` 展开为 `the Municipal Institute of Culture and Tourism (IMCT)` |
| 西语页英文混入 | `01` 的 `plus code` 改为 `código Plus Code` |
| Title 大小写 | 36 个 Title 统一为西语句式大写（仅首词与专有名词大写） |
| es-CO 用词 | `bordillos`（es-ES）统一为 `andenes` / `sardineles`；`app` 统一为 `aplicación` |
| 关键词遗漏 | `01` 正文补入 `Saint Pío Park` 一次 |

### 10.2 数字与日期格式（各语言分别正确，禁止跨语言复制）

| 语境 | 评分 | 千分位 | 日期 |
| --- | --- | --- | --- |
| 西语 36 页 | `4,5/5` | `16.001` / `3.000` | `4 de noviembre de 2026` |
| 英文 E1–E4 | `4.5/5` | `16,001` | `4 November 2026` |
| 中文报告 | `4.5` | `16,001` | `2026 年 11 月 4 日` |

### 10.3 未执行 / 待授权

| 项 | 状态 |
| --- | --- |
| 7 份 GSC CSV 与 Skill v1.1 原文 | 不在工作区，逐条校验与原始数据解析未执行，需用户提供 |
| 首页 TDK 与评分日期同步 | 仅建议，需授权改代码 |
| 36 页实际建站 | 未启动，需授权 |
| 英语 E1–E4 完整正文与逐页 hreflang 映射 | 条件性未启动（本文仅给 TDK / H1 / 要点） |
| 提交、推送、部署 | 本文档交付时按用户授权执行 git 提交与推送；部署不在范围内 |

### 10.4 一致性结论

36 个西语页无中文混入、无成段英文混入、无其他罗曼语混淆；英文 4 页为英语并保留西语专有名词；slug 全为西语（`/en/` 前缀页为英文 slug）；`San Pio`（无重音）仅存在于 GSC 关键词表，页面正文一律 `San Pío`；`Cabecera del Llano` 采用站点既有大写形式，与用户输入的 `Cabecera del llano` 不同但站内一致。
