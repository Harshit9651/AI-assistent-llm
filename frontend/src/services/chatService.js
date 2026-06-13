export const askQuestion = async (question) => {

  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  return {
    id: crypto.randomUUID(),

    role: "assistant",

    content: `
# PMCF

PMCF stands for Post Market Clinical Follow-Up.

It is required under EU MDR.

## Key Points

- Continuous monitoring
- Clinical safety
- Regulatory compliance
`,

    sources: [
      "EU MDR Article 83",
      "PMCF Guidance Document"
    ]
  };
};