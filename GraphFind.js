var Vertex = new Array();
var Edge = new Array();
var Adj = new Array(100).fill(0).map(() => new Array(100).fill(0));
var Calc = new Array(100).fill(0).map(() => new Array(100).fill(0));
var Degree = new Array(100).fill(0);
var Path = new Array(100).fill(0).map(() => new Array(100).fill(0));

Vertex[1] = "glucose";
Vertex[2] = "glucose 6-phosphate";
Vertex[3] = "fructose 6-phosphate";
Vertex[4] = "fructose 1,6-bisphosphate";
Vertex[5] = "glyceraldehyde 3-phosphate";
Vertex[6] = "dihydroxyacetone phosphate";
Vertex[7] = "1,3-bisphosphoglycerate";
Vertex[8] = "3-phosphoglycerate";
Vertex[9] = "2-phosphoglycerate";
Vertex[10] = "phosphoenolpyruvate";
Vertex[11] = "pyruvate";
Vertex[12] = "lactate";
Vertex[13] = "acetaldehyde";
Vertex[14] = "CO2";
Vertex[15] = "ethanol";
Vertex[16] = "alcohol";
Vertex[17] = "mannose";
Vertex[18] = "mannose 6-phosphate";
Vertex[19] = "sucrose";
Vertex[20] = "fructose";
Vertex[21] = "fructose 1-phosphate";
Vertex[22] = "glyceraldehyde";
Vertex[23] = "6-phosphoglucono-δ-lactone";
Vertex[24] = "6-phosphogluconate";
Vertex[25] = "ribulose 5-phosphate";
Vertex[26] = "ribose 5-phosphate";
Vertex[27] = "CoA-SH";
Vertex[28] = "acetyl-CoA";
Vertex[29] = "oxaloacetate";
Vertex[30] = "citrate";
Vertex[31] = "isocitrate";
Vertex[32] = "alpha-ketoglutarate";
Vertex[33] = "succinyl-CoA";
Vertex[34] = "succinate";
Vertex[35] = "fumarate";
Vertex[36] = "malate";
Vertex[37] = "glyoxylate";
Vertex[38] = "triacylglycerol";
Vertex[39] = "glycerol";
Vertex[40] = "fatty acid";
Vertex[41] = "L-glycerol 3-phosphate";
Vertex[42] = "glycerol 3-phosphate";
Vertex[43] = "fatty acyl-CoA";
Vertex[44] = "acyl-CoA";
Vertex[45] = "acetoacetyl-CoA";
Vertex[46] = "HMG-CoA";
Vertex[47] = "acetoacetate";
Vertex[48] = "acetone";
Vertex[49] = "D-beta-hydroxybutyrate";
Vertex[50] = "glutamate";
Vertex[51] = "gamma-glutamyl phosphate";
Vertex[52] = "NH4+";
Vertex[53] = "glutamine";
Vertex[54] = "alanine";
Vertex[55] = "HCO3-";
Vertex[56] = "bicarbonate";
Vertex[57] = "ammonia";
Vertex[58] = "ammonium ion";
Vertex[59] = "carbon dioxide";
Vertex[60] = "PEP";
Vertex[61] = "carbamoyl phosphate";
Vertex[62] = "ornithine";
Vertex[63] = "citrulline";
Vertex[64] = "aspartate";
Vertex[65] = "argininosuccinate";
Vertex[66] = "arginine";
Vertex[67] = "urea";
Vertex[68] = "N-acetylglutamate";
Vertex[69] = "propionyl-CoA";
Vertex[70] = "D-methylmalonyl-CoA";
Vertex[71] = "L-methylmalonyl-CoA";
Vertex[72] = "fructose 2,6-bisphosphate";
Vertex[73] = "glucose 1-phosphate";
Vertex[74] = "glycogen with n residues";
Vertex[75] = "glycogen with (n-1) residues";
Vertex[76] = "UTP";
Vertex[77] = "UDP-glucose";
Vertex[78] = "PPi";
Vertex[79] = "pyrophosphate";
Vertex[80] = "UDP";
Vertex[81] = "ADP-glucose";
Vertex[82] = "sucrose 6-phosphate";
Vertex[83] = "RuBP";
Vertex[84] = "ribulose 1,5-bisphosphate";
Vertex[85] = "malonyl-CoA";
Vertex[86] = "phosphatidic acid";
Vertex[87] = "1,2-diacylglycerol";
Vertex[88] = "mevalonate";
Vertex[89] = "cholesterol";
Vertex[90] = "cholesteryl ester";
Vertex[91] = "PRPP";
Vertex[92] = "5-phosphoribosyl-1-pyrophosphate";
Vertex[93] = "5-phosphoribosylamin";

Edge[1] = {From: 1, To: 2, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "hexokinase", coenzyme: "", }
Edge[2] = {From: 2, To: 3, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphohexose isomerase", coenzyme: "", }
Edge[3] = {From: 3, To: 4, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "PFK-1", coenzyme: "", }
Edge[4] = {From: 4, To: 5, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aldolase", coenzyme: "", }
Edge[5] = {From: 4, To: 6, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aldolase", coenzyme: "", }
Edge[6] = {From: 6, To: 5, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "triose phosphate isomerase", coenzyme: "", }
Edge[7] = {From: 5, To: 7, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glyceraldehyde 3-phosphate dehydrogenase complex", coenzyme: "", }
Edge[8] = {From: 7, To: 8, NADH: 0, FADH2: 0, NADPH: 0, ATP: -1, GTP: 0, enzyme: "phosphoglycerate kinase", coenzyme: "", }
Edge[9] = {From: 8, To: 9, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphoglycerate mutase", coenzyme: "", }
Edge[10] = {From: 9, To: 10, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "enolase", coenzyme: "", }
Edge[11] = {From: 10, To: 11, NADH: 0, FADH2: 0, NADPH: 0, ATP: -1, GTP: 0, enzyme: "pyruvate kinase", coenzyme: "", }
Edge[12] = {From: 11, To: 12, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "lactate dehydrogenase", coenzyme: "", }
Edge[13] = {From: 11, To: 13, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate decarboxylase", coenzyme: "TPP", }
Edge[14] = {From: 11, To: 14, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate decarboxylase", coenzyme: "TPP", }
Edge[15] = {From: 13, To: 15, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alcohol dehydrogenase", coenzyme: "", }
Edge[16] = {From: 13, To: 16, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alcohol dehydrogenase", coenzyme: "", }
Edge[17] = {From: 16, To: 13, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alcohol dehydrogenase", coenzyme: "", }
Edge[18] = {From: 15, To: 13, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alcohol dehydrogenase", coenzyme: "", }
Edge[19] = {From: 13, To: 11, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate decarboxylase", coenzyme: "TPP", }
Edge[20] = {From: 14, To: 11, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate decarboxylase", coenzyme: "TPP", }
Edge[21] = {From: 17, To: 18, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "hexokinase", coenzyme: "", }
Edge[22] = {From: 18, To: 3, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphomannose isomerase", coenzyme: "", }
Edge[23] = {From: 19, To: 1, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "sucrase", coenzyme: "", }
Edge[24] = {From: 19, To: 20, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "sucrase", coenzyme: "", }
Edge[25] = {From: 20, To: 21, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "fructokinase", coenzyme: "", }
Edge[26] = {From: 21, To: 22, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "fructose 1-phosphate aldolase", coenzyme: "", }
Edge[27] = {From: 21, To: 6, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "fructose 1-phosphate aldolase", coenzyme: "", }
Edge[28] = {From: 22, To: 5, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "triose kinase", coenzyme: "", }
Edge[29] = {From: 2, To: 23, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "glucose 6-phosphate dehydrogenase", coenzyme: "", }
Edge[30] = {From: 23, To: 24, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "lactonase", coenzyme: "", }
Edge[31] = {From: 24, To: 25, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "6-phosphogluconate dehydrogenase", coenzyme: "", }
Edge[32] = {From: 24, To: 14, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "6-phosphogluconate dehydrogenase", coenzyme: "", }
Edge[33] = {From: 25, To: 26, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphopentose isomerase", coenzyme: "", }
Edge[34] = {From: 11, To: 28, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate dehydrogenase complex", coenzyme: "", }
Edge[35] = {From: 27, To: 28, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate dehydrogenase complex", coenzyme: "", }
Edge[36] = {From: 11, To: 14, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate dehydrogenase complex", coenzyme: "", }
Edge[37] = {From: 27, To: 14, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate dehydrogenase complex", coenzyme: "", }
Edge[38] = {From: 28, To: 30, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "citrate synthase", coenzyme: "", }
Edge[39] = {From: 29, To: 30, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "citrate synthase", coenzyme: "", }
Edge[40] = {From: 28, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "citrate synthase", coenzyme: "", }
Edge[41] = {From: 29, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "citrate synthase", coenzyme: "", }
Edge[42] = {From: 30, To: 31, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aconitase", coenzyme: "", }
Edge[43] = {From: 31, To: 30, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aconitase", coenzyme: "", }
Edge[44] = {From: 31, To: 32, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "isocitrate dehydrogenase", coenzyme: "", }
Edge[45] = {From: 31, To: 14, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "isocitrate dehydrogenase", coenzyme: "", }
Edge[46] = {From: 32, To: 33, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "α-ketoglutarate dehydrogenase complex", coenzyme: "", }
Edge[47] = {From: 27, To: 33, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "α-ketoglutarate dehydrogenase complex", coenzyme: "", }
Edge[48] = {From: 32, To: 14, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "α-ketoglutarate dehydrogenase complex", coenzyme: "", }
Edge[49] = {From: 27, To: 14, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "α-ketoglutarate dehydrogenase complex", coenzyme: "", }
Edge[50] = {From: 33, To: 34, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: -1, enzyme: "succinyl-CoA synthetase", coenzyme: "", }
Edge[51] = {From: 33, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: -1, enzyme: "succinyl-CoA synthetase", coenzyme: "", }
Edge[52] = {From: 34, To: 33, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 1, enzyme: "succinyl-CoA synthetase", coenzyme: "", }
Edge[53] = {From: 27, To: 33, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 1, enzyme: "succinyl-CoA synthetase", coenzyme: "", }
Edge[54] = {From: 33, To: 34, NADH: 0, FADH2: 0, NADPH: 0, ATP: -1, GTP: 0, enzyme: "succinyl-CoA synthetase", coenzyme: "", }
Edge[55] = {From: 33, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: -1, GTP: 0, enzyme: "succinyl-CoA synthetase", coenzyme: "", }
Edge[56] = {From: 34, To: 33, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "succinyl-CoA synthetase", coenzyme: "", }
Edge[57] = {From: 27, To: 33, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "succinyl-CoA synthetase", coenzyme: "", }
Edge[58] = {From: 34, To: 35, NADH: 0, FADH2: -1, NADPH: 0, ATP: 0, GTP: 0, enzyme: "succinate dehydrogenase", coenzyme: "", }
Edge[59] = {From: 35, To: 36, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "fumarase", coenzyme: "", }
Edge[60] = {From: 36, To: 29, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malate dehydrogenase", coenzyme: "", }
Edge[61] = {From: 35, To: 34, NADH: 0, FADH2: 1, NADPH: 0, ATP: 0, GTP: 0, enzyme: "succinate dehydrogenase", coenzyme: "", }
Edge[62] = {From: 36, To: 35, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "fumarase", coenzyme: "", }
Edge[63] = {From: 29, To: 36, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malate dehydrogenase", coenzyme: "", }
Edge[64] = {From: 31, To: 34, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "isocitrate lyase", coenzyme: "", }
Edge[65] = {From: 31, To: 37, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "isocitrate lyase", coenzyme: "", }
Edge[66] = {From: 37, To: 36, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malate synthase", coenzyme: "", }
Edge[67] = {From: 28, To: 36, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malate synthase", coenzyme: "", }
Edge[68] = {From: 37, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malate synthase", coenzyme: "", }
Edge[69] = {From: 28, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malate synthase", coenzyme: "", }
Edge[70] = {From: 38, To: 39, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "lipase", coenzyme: "", }
Edge[71] = {From: 38, To: 40, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "lipase", coenzyme: "", }
Edge[72] = {From: 39, To: 41, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "glycerol kinase", coenzyme: "", }
Edge[73] = {From: 39, To: 42, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "glycerol kinase", coenzyme: "", }
Edge[74] = {From: 41, To: 6, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycerol 3-phosphate dehydrogenase", coenzyme: "", }
Edge[75] = {From: 42, To: 6, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycerol 3-phosphate dehydrogenase", coenzyme: "", }
Edge[76] = {From: 6, To: 41, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycerol 3-phosphate dehydrogenase", coenzyme: "", }
Edge[77] = {From: 6, To: 42, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycerol 3-phosphate dehydrogenase", coenzyme: "", }
Edge[78] = {From: 43, To: 7, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glyceraldehyde 3-phosphate dehydrogenase complex", coenzyme: "", }
Edge[79] = {From: 40, To: 43, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "fatty acyl-CoA synthetase", coenzyme: "", }
Edge[80] = {From: 40, To: 44, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "fatty acyl-CoA synthetase", coenzyme: "", }
Edge[81] = {From: 28, To: 45, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "thiolase", coenzyme: "", }
Edge[82] = {From: 28, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "thiolase", coenzyme: "", }
Edge[83] = {From: 45, To: 46, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "HMG-CoA synthase", coenzyme: "", }
Edge[84] = {From: 45, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "HMG-CoA synthase", coenzyme: "", }
Edge[85] = {From: 28, To: 46, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "HMG-CoA synthase", coenzyme: "", }
Edge[86] = {From: 28, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "HMG-CoA synthase", coenzyme: "", }
Edge[87] = {From: 45, To: 28, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "thiolase", coenzyme: "", }
Edge[88] = {From: 27, To: 28, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "thiolase", coenzyme: "", }
Edge[89] = {From: 46, To: 28, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "HMG-CoA lyase", coenzyme: "", }
Edge[90] = {From: 46, To: 47, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "HMG-CoA lyase", coenzyme: "", }
Edge[91] = {From: 47, To: 48, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acetoacetate decarboxylase", coenzyme: "", }
Edge[92] = {From: 47, To: 14, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acetoacetate decarboxylase", coenzyme: "", }
Edge[93] = {From: 47, To: 49, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "D-β-hydroxybutyrate dehydrogenase", coenzyme: "", }
Edge[94] = {From: 49, To: 47, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "D-β-hydroxybutyrate dehydrogenase", coenzyme: "", }
Edge[95] = {From: 47, To: 45, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "β-ketoacyl-CoA transferase", coenzyme: "", }
Edge[96] = {From: 33, To: 45, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "β-ketoacyl-CoA transferase", coenzyme: "", }
Edge[97] = {From: 47, To: 34, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "β-ketoacyl-CoA transferase", coenzyme: "", }
Edge[98] = {From: 33, To: 34, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "β-ketoacyl-CoA transferase", coenzyme: "", }
Edge[99] = {From: 50, To: 51, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "glutamine synthetase", coenzyme: "", }
Edge[100] = {From: 51, To: 53, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine synthetase", coenzyme: "", }
Edge[101] = {From: 52, To: 53, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine synthetase", coenzyme: "", }
Edge[102] = {From: 53, To: 50, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutaminase", coenzyme: "", }
Edge[103] = {From: 53, To: 52, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutaminase", coenzyme: "", }
Edge[104] = {From: 11, To: 54, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alanine aminotransferase", coenzyme: "", }
Edge[105] = {From: 11, To: 32, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alanine aminotransferase", coenzyme: "", }
Edge[106] = {From: 50, To: 54, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alanine aminotransferase", coenzyme: "", }
Edge[107] = {From: 50, To: 32, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alanine aminotransferase", coenzyme: "", }
Edge[108] = {From: 54, To: 11, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alanine aminotransferase", coenzyme: "", }
Edge[109] = {From: 32, To: 11, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alanine aminotransferase", coenzyme: "", }
Edge[110] = {From: 54, To: 50, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alanine aminotransferase", coenzyme: "", }
Edge[111] = {From: 32, To: 50, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "alanine aminotransferase", coenzyme: "", }
Edge[112] = {From: 50, To: 32, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[113] = {From: 50, To: 52, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[114] = {From: 50, To: 32, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[115] = {From: 50, To: 52, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[116] = {From: 32, To: 50, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[117] = {From: 52, To: 50, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[118] = {From: 32, To: 50, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[119] = {From: 52, To: 50, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[120] = {From: 57, To: 53, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine synthetase", coenzyme: "", }
Edge[121] = {From: 53, To: 57, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutaminase", coenzyme: "", }
Edge[122] = {From: 50, To: 57, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[123] = {From: 50, To: 57, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[124] = {From: 57, To: 50, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[125] = {From: 57, To: 50, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[126] = {From: 58, To: 53, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine synthetase", coenzyme: "", }
Edge[127] = {From: 53, To: 58, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutaminase", coenzyme: "", }
Edge[128] = {From: 50, To: 58, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[129] = {From: 50, To: 58, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[130] = {From: 58, To: 50, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[131] = {From: 58, To: 50, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "glutamate dehydrogenase", coenzyme: "", }
Edge[132] = {From: 11, To: 59, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate decarboxylase", coenzyme: "TPP", }
Edge[133] = {From: 59, To: 11, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate decarboxylase", coenzyme: "TPP", }
Edge[134] = {From: 24, To: 59, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "6-phosphogluconate dehydrogenase", coenzyme: "", }
Edge[135] = {From: 11, To: 59, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate dehydrogenase complex", coenzyme: "", }
Edge[136] = {From: 27, To: 59, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "pyruvate dehydrogenase complex", coenzyme: "", }
Edge[137] = {From: 31, To: 59, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "isocitrate dehydrogenase", coenzyme: "", }
Edge[138] = {From: 32, To: 59, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "α-ketoglutarate dehydrogenase complex", coenzyme: "", }
Edge[139] = {From: 27, To: 59, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "α-ketoglutarate dehydrogenase complex", coenzyme: "", }
Edge[140] = {From: 47, To: 59, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acetoacetate decarboxylase", coenzyme: "", }
Edge[141] = {From: 11, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "pyruvate carboxylase", coenzyme: "biotin", }
Edge[142] = {From: 55, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "pyruvate carboxylase", coenzyme: "biotin", }
Edge[143] = {From: 56, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "pyruvate carboxylase", coenzyme: "biotin", }
Edge[144] = {From: 29, To: 11, NADH: 0, FADH2: 0, NADPH: 0, ATP: -1, GTP: 0, enzyme: "pyruvate carboxylase", coenzyme: "biotin", }
Edge[145] = {From: 29, To: 55, NADH: 0, FADH2: 0, NADPH: 0, ATP: -1, GTP: 0, enzyme: "pyruvate carboxylase", coenzyme: "biotin", }
Edge[146] = {From: 29, To: 56, NADH: 0, FADH2: 0, NADPH: 0, ATP: -1, GTP: 0, enzyme: "pyruvate carboxylase", coenzyme: "biotin", }
Edge[147] = {From: 9, To: 60, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "enolase", coenzyme: "", }
Edge[148] = {From: 60, To: 11, NADH: 0, FADH2: 0, NADPH: 0, ATP: -1, GTP: 0, enzyme: "pyruvate kinase", coenzyme: "", }
Edge[149] = {From: 10, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: -1, enzyme: "PEP carboxykinase", coenzyme: "", }
Edge[150] = {From: 60, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: -1, enzyme: "PEP carboxykinase", coenzyme: "", }
Edge[151] = {From: 14, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: -1, enzyme: "PEP carboxykinase", coenzyme: "", }
Edge[152] = {From: 59, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: -1, enzyme: "PEP carboxykinase", coenzyme: "", }
Edge[153] = {From: 29, To: 10, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 1, enzyme: "PEP carboxykinase", coenzyme: "", }
Edge[154] = {From: 29, To: 60, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 1, enzyme: "PEP carboxykinase", coenzyme: "", }
Edge[155] = {From: 29, To: 14, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 1, enzyme: "PEP carboxykinase", coenzyme: "", }
Edge[156] = {From: 29, To: 59, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 1, enzyme: "PEP carboxykinase", coenzyme: "", }
Edge[157] = {From: 10, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "PEP carboxylase", coenzyme: "", }
Edge[158] = {From: 60, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "PEP carboxylase", coenzyme: "", }
Edge[159] = {From: 55, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "PEP carboxylase", coenzyme: "", }
Edge[160] = {From: 56, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "PEP carboxylase", coenzyme: "", }
Edge[161] = {From: 29, To: 10, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "PEP carboxylase", coenzyme: "", }
Edge[162] = {From: 29, To: 60, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "PEP carboxylase", coenzyme: "", }
Edge[163] = {From: 29, To: 55, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "PEP carboxylase", coenzyme: "", }
Edge[164] = {From: 29, To: 56, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "PEP carboxylase", coenzyme: "", }
Edge[165] = {From: 11, To: 36, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[166] = {From: 55, To: 36, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[167] = {From: 56, To: 36, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[168] = {From: 11, To: 36, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[169] = {From: 55, To: 36, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[170] = {From: 56, To: 36, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[171] = {From: 36, To: 11, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[172] = {From: 36, To: 55, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[173] = {From: 36, To: 56, NADH: -1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[174] = {From: 36, To: 11, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[175] = {From: 36, To: 55, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[176] = {From: 36, To: 56, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "malic enzyme", coenzyme: "", }
Edge[177] = {From: 55, To: 61, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "carbamoyl phosphate synthetase I", coenzyme: "", }
Edge[178] = {From: 56, To: 61, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "carbamoyl phosphate synthetase I", coenzyme: "", }
Edge[179] = {From: 52, To: 61, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "carbamoyl phosphate synthetase I", coenzyme: "", }
Edge[180] = {From: 57, To: 61, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "carbamoyl phosphate synthetase I", coenzyme: "", }
Edge[181] = {From: 58, To: 61, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "carbamoyl phosphate synthetase I", coenzyme: "", }
Edge[182] = {From: 61, To: 63, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "ornithine transcarbamoylase", coenzyme: "", }
Edge[183] = {From: 62, To: 63, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "ornithine transcarbamoylase", coenzyme: "", }
Edge[184] = {From: 63, To: 65, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "argininosuccinate synthetase", coenzyme: "", }
Edge[185] = {From: 64, To: 65, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "argininosuccinate synthetase", coenzyme: "", }
Edge[186] = {From: 65, To: 35, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "argininosuccinate lyase", coenzyme: "", }
Edge[187] = {From: 65, To: 66, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "argininosuccinate lyase", coenzyme: "", }
Edge[188] = {From: 66, To: 67, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "arginase", coenzyme: "", }
Edge[189] = {From: 66, To: 62, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "arginase", coenzyme: "", }
Edge[190] = {From: 29, To: 64, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aminotransferase", coenzyme: "", }
Edge[191] = {From: 50, To: 64, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aminotransferase", coenzyme: "", }
Edge[192] = {From: 29, To: 32, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aminotransferase", coenzyme: "", }
Edge[193] = {From: 50, To: 32, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aminotransferase", coenzyme: "", }
Edge[194] = {From: 64, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aminotransferase", coenzyme: "", }
Edge[195] = {From: 64, To: 50, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aminotransferase", coenzyme: "", }
Edge[196] = {From: 32, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aminotransferase", coenzyme: "", }
Edge[197] = {From: 32, To: 50, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aminotransferase", coenzyme: "", }
Edge[198] = {From: 28, To: 68, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "N-acetylglutamate synthase", coenzyme: "", }
Edge[199] = {From: 50, To: 68, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "N-acetylglutamate synthase", coenzyme: "", }
Edge[200] = {From: 28, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "N-acetylglutamate synthase", coenzyme: "", }
Edge[201] = {From: 50, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "N-acetylglutamate synthase", coenzyme: "", }
Edge[202] = {From: 69, To: 70, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "propionyl-CoA carboxylase", coenzyme: "biotin", }
Edge[203] = {From: 55, To: 70, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "propionyl-CoA carboxylase", coenzyme: "", }
Edge[204] = {From: 56, To: 70, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "propionyl-CoA carboxylase", coenzyme: "", }
Edge[205] = {From: 70, To: 71, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "methylmalonyl-CoA epimerase", coenzyme: "", }
Edge[206] = {From: 71, To: 70, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "methylmalonyl-CoA epimerase", coenzyme: "", }
Edge[207] = {From: 71, To: 33, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "methylmalonyl-CoA mutase", coenzyme: "B12", }
Edge[208] = {From: 33, To: 71, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "methylmalonyl-CoA mutase", coenzyme: "B12", }
Edge[209] = {From: 2, To: 1, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glucose 6-phosphatase", coenzyme: "", }
Edge[210] = {From: 3, To: 2, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphohexose isomerase", coenzyme: "", }
Edge[211] = {From: 4, To: 3, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "FBPase-1", coenzyme: "", }
Edge[212] = {From: 5, To: 4, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aldolase", coenzyme: "", }
Edge[213] = {From: 6, To: 4, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "aldolase", coenzyme: "", }
Edge[214] = {From: 5, To: 6, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "triose phosphate isomerase", coenzyme: "", }
Edge[215] = {From: 7, To: 5, NADH: 1, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glyceraldehyde 3-phosphate dehydrogenase complex", coenzyme: "", }
Edge[216] = {From: 8, To: 7, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "phosphoglycerate kinase", coenzyme: "", }
Edge[217] = {From: 9, To: 8, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphoglycerate mutase", coenzyme: "", }
Edge[218] = {From: 10, To: 9, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "enolase", coenzyme: "", }
Edge[219] = {From: 3, To: 72, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "PFK-2", coenzyme: "", }
Edge[220] = {From: 72, To: 3, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "FBPase-2", coenzyme: "", }
Edge[221] = {From: 73, To: 2, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphoglucomutase", coenzyme: "", }
Edge[222] = {From: 2, To: 73, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphoglucomutase", coenzyme: "", }
Edge[223] = {From: 74, To: 75, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycogen phosphorylase", coenzyme: "", }
Edge[224] = {From: 74, To: 73, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycogen phosphorylase", coenzyme: "", }
Edge[225] = {From: 73, To: 77, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "UDP-glucose pyrophosphorylase", coenzyme: "", }
Edge[226] = {From: 76, To: 77, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "UDP-glucose pyrophosphorylase", coenzyme: "", }
Edge[227] = {From: 73, To: 78, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "UDP-glucose pyrophosphorylase", coenzyme: "", }
Edge[228] = {From: 76, To: 78, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "UDP-glucose pyrophosphorylase", coenzyme: "", }
Edge[229] = {From: 73, To: 79, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "UDP-glucose pyrophosphorylase", coenzyme: "", }
Edge[230] = {From: 76, To: 79, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "UDP-glucose pyrophosphorylase", coenzyme: "", }
Edge[231] = {From: 77, To: 80, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycogen synthase", coenzyme: "", }
Edge[232] = {From: 77, To: 74, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycogen synthase", coenzyme: "", }
Edge[233] = {From: 75, To: 80, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycogen synthase", coenzyme: "", }
Edge[234] = {From: 75, To: 74, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glycogen synthase", coenzyme: "", }
Edge[235] = {From: 73, To: 81, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "ADP-glucose pyrophosphorylase", coenzyme: "", }
Edge[236] = {From: 81, To: 74, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "starch synthase", coenzyme: "", }
Edge[237] = {From: 75, To: 74, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "starch synthase", coenzyme: "", }
Edge[238] = {From: 77, To: 82, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "sucrose 6-phosphate synthase", coenzyme: "", }
Edge[239] = {From: 3, To: 82, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "sucrose 6-phosphate synthase", coenzyme: "", }
Edge[240] = {From: 77, To: 80, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "sucrose 6-phosphate synthase", coenzyme: "", }
Edge[241] = {From: 3, To: 80, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "sucrose 6-phosphate synthase", coenzyme: "", }
Edge[242] = {From: 82, To: 19, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "sucrose 6-phosphate phosphatase", coenzyme: "", }
Edge[243] = {From: 84, To: 8, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "rubisco", coenzyme: "", }
Edge[244] = {From: 14, To: 8, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "rubisco", coenzyme: "", }
Edge[245] = {From: 59, To: 8, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "rubisco", coenzyme: "", }
Edge[246] = {From: 7, To: 5, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "glyceraldehyde 3-phosphate dehydrogenase complex", coenzyme: "", }
Edge[247] = {From: 36, To: 29, NADH: 0, FADH2: 0, NADPH: -1, ATP: 0, GTP: 0, enzyme: "malate dehydrogenase", coenzyme: "", }
Edge[248] = {From: 29, To: 36, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "malate dehydrogenase", coenzyme: "", }
Edge[249] = {From: 11, To: 60, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "pyruvate phosphate dikinase", coenzyme: "", }
Edge[250] = {From: 11, To: 10, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "pyruvate phosphate dikinase", coenzyme: "", }
Edge[251] = {From: 60, To: 9, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "enolase", coenzyme: "", }
Edge[252] = {From: 28, To: 85, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "acetyl-CoA carboxylase", coenzyme: "", }
Edge[253] = {From: 55, To: 85, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "acetyl-CoA carboxylase", coenzyme: "", }
Edge[254] = {From: 56, To: 85, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "acetyl-CoA carboxylase", coenzyme: "", }
Edge[255] = {From: 30, To: 28, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "citrate lyase", coenzyme: "", }
Edge[256] = {From: 30, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "citrate lyase", coenzyme: "", }
Edge[257] = {From: 27, To: 28, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "citrate lyase", coenzyme: "", }
Edge[258] = {From: 27, To: 29, NADH: 0, FADH2: 0, NADPH: 0, ATP: 1, GTP: 0, enzyme: "citrate lyase", coenzyme: "", }
Edge[259] = {From: 41, To: 86, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[260] = {From: 42, To: 86, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[261] = {From: 44, To: 86, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[262] = {From: 41, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[263] = {From: 42, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[264] = {From: 44, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[265] = {From: 86, To: 87, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "phosphatidic acid phosphatase", coenzyme: "", }
Edge[266] = {From: 87, To: 38, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[267] = {From: 87, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[268] = {From: 44, To: 38, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[269] = {From: 44, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[270] = {From: 43, To: 38, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[271] = {From: 43, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[272] = {From: 43, To: 86, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[273] = {From: 43, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "acyl transferase", coenzyme: "", }
Edge[274] = {From: 46, To: 88, NADH: 0, FADH2: 0, NADPH: 2, ATP: 0, GTP: 0, enzyme: "HMG-CoA reductase", coenzyme: "", }
Edge[275] = {From: 46, To: 27, NADH: 0, FADH2: 0, NADPH: 2, ATP: 0, GTP: 0, enzyme: "HMG-CoA reductase", coenzyme: "", }
Edge[276] = {From: 89, To: 90, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "ACAT", coenzyme: "", }
Edge[277] = {From: 43, To: 90, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "ACAT", coenzyme: "", }
Edge[278] = {From: 44, To: 90, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "ACAT", coenzyme: "", }
Edge[279] = {From: 89, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "ACAT", coenzyme: "", }
Edge[280] = {From: 43, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "ACAT", coenzyme: "", }
Edge[281] = {From: 44, To: 27, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "ACAT", coenzyme: "", }
Edge[282] = {From: 53, To: 50, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "glutamate synthase", coenzyme: "", }
Edge[283] = {From: 32, To: 50, NADH: 0, FADH2: 0, NADPH: 1, ATP: 0, GTP: 0, enzyme: "glutamate synthase", coenzyme: "", }
Edge[284] = {From: 26, To: 91, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "ribose phosphate pyrophosphokinase", coenzyme: "", }
Edge[285] = {From: 26, To: 92, NADH: 0, FADH2: 0, NADPH: 0, ATP: 2, GTP: 0, enzyme: "ribose phosphate pyrophosphokinase", coenzyme: "", }
Edge[286] = {From: 91, To: 93, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine-PRPP amidotransferase", coenzyme: "", }
Edge[287] = {From: 92, To: 93, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine-PRPP amidotransferase", coenzyme: "", }
Edge[288] = {From: 53, To: 93, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine-PRPP amidotransferase", coenzyme: "", }
Edge[289] = {From: 91, To: 50, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine-PRPP amidotransferase", coenzyme: "", }
Edge[290] = {From: 92, To: 50, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine-PRPP amidotransferase", coenzyme: "", }
Edge[291] = {From: 53, To: 50, NADH: 0, FADH2: 0, NADPH: 0, ATP: 0, GTP: 0, enzyme: "glutamine-PRPP amidotransferase", coenzyme: "  ", }

//initialize
for (var i = 1; i <= 291; i++) {
    Adj[ Edge[i].From ][ ++Degree[ Edge[i].From ] ] = i;
    Calc[ Edge[i].From ][ Edge[i].To ] = i;
}

//innerHTML
var str = "<option>Select a Compound</option>";
var x = document.getElementById("x");
var y = document.getElementById("y");
console.log(x);
for (var i = 1; i <= 93; i++) {
    str += '<option>' + Vertex[i] + '</option>';
}
x.innerHTML = str;
y.innerHTML = str;

var Stack = new Array();
var Path_sum = 0;
function findPath()
{ 
    var x = Vertex.indexOf(document.getElementById("x").value);
    var y = Vertex.indexOf(document.getElementById("y").value);
    //alert(x);
    var cnt = 1;
    var Visited = new Array(100).fill(0);
    Stack[1] = x;
    Path_sum = 0;
    var step = 0;

    while (cnt > 0)
    {
        step++;
        if (step > 100000) break;
        if (Stack[cnt] == y)
        {
            if (Path_sum < 20)
            {
                Path_sum++;
                Path[Path_sum][0] = cnt;
                for(var j = 1; j <= cnt; j++)
                    Path[Path_sum][j] = Stack[j];
            }
            Visited[y] = 0;
            cnt--;
        }
        else
        {
            if (Visited[ Stack[cnt] ] == Degree[ Stack[cnt] ])
            {
                Visited[ Stack[cnt] ] = 0;
                cnt--;
            }
            else
            {
                Visited[ Stack[cnt] ]++;
                if (Visited[ Stack[cnt] ] > Degree[ Stack[cnt] ])
                {
                    Visited[ Stack[cnt] ] = 0;
                    cnt--;
                    continue;
                }
                var Cur_Edge = Adj[ Stack[cnt] ][ Visited[ Stack[cnt] ] ];
                while (Visited[ Stack[cnt] ] <= Degree[ Stack[cnt] ] && Visited[ Edge[Cur_Edge].To ] > 0)
                {
                    Visited[ Stack[cnt] ]++;
                    Cur_Edge = Adj[ Stack[cnt] ][ Visited[ Stack[cnt] ] ];       
                }
                if (Visited[ Stack[cnt] ] > Degree[ Stack[cnt] ])
                {
                    Visited[ Stack[cnt] ] = 0;
                    cnt--;                   
                }
                else
                {
                    cnt++;
                    Stack[ cnt ] = Edge[Cur_Edge].To;
                }
            }
        }
    }

    var ans = document.getElementById("Result");

    ans.innerHTML += Path_sum;
    ans.innerHTML += " Pathway(s) in all<br>";
    var NADH_1 = 0;
    var FADH2_1 = 0;
    var NADPH_1 = 0;
    var ATP_1 = 0;
    var GTP_1 = 0;
    var Total = 0;

    for(var i = 1; i <= Path_sum; i++)
    {
        console.log(Path[i]);
        for(var j = 1; j < Path[i][0]; j++)
        {
            var nd = Calc[ Path[i][j] ][ Path[i][j + 1] ];
            console.log(nd);
            console.log(Calc[1][2]);
            ans.innerHTML += Vertex[Edge[nd].From] + " can be transferred to " + Vertex[Edge[nd].To];
            if (Edge[nd].enzyme != "") 
                ans.innerHTML += " with enzyme " + Edge[nd].enzyme;
            if (Edge[nd].coenzyme != "") 
                ans.innerHTML += " and coenzyme " + Edge[nd].coenzyme;  
            NADH_1 -= Edge[nd].NADH;
            FADH2_1 -= Edge[nd].FADH2;
            NADPH_1 -= Edge[nd].NADPH;
            ATP_1 -= Edge[nd].ATP;
            GTP_1 -= Edge[nd].GTP;
            ans.innerHTML += "<br>";
        }
        Total = NADH_1 * 1.5 + FADH2_1 * 2.5 + NADPH_1 * 1.5 + ATP_1 + GTP_1;
        ans.innerHTML += NADH_1 + " NADH(s) and " + FADH2_1 + " FADH2(s) and " + NADPH_1 + " NADPH(s) and " + ATP_1 + " ATP(s) and " + GTP_1 + " GTP(s) can be obtained in total<br>";
        ans.innerHTML += "This equals to " + Total + " ATP(s)<br><br>"
     
    }
    

}