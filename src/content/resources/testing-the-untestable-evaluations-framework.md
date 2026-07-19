---
title: "Testing the Untestable: A Deep Dive into Apple's Evaluations Framework"
author: "Walid Sassi"
resourceType: "article"
topics:
  - "foundation-models"
  - "testing"
  - "ai"
  - "llm"
difficulty: "advanced"
url: "https://www.walidsassi.com/posts/evaluations-framework"
publishedDate: "2026-07-19"
featured: true
summary: "Learn how to evaluate Foundation Models-powered features using Apple's new Evaluations framework, including datasets, evaluators, metrics, synthetic sample generation, and Swift Testing integration."
editorNote: "One of the first in-depth guides covering Apple's Evaluations framework introduced alongside Foundation Models improvements in Xcode 27 and iOS 27. It explains how to test probabilistic AI features using measurable evaluation metrics instead of traditional deterministic assertions."
duration: "22 min read"
---

This article provides a comprehensive walkthrough of Apple's Evaluations framework for Foundation Models. It demonstrates how to build evaluation datasets, define subjects, create custom evaluators and metrics, generate synthetic test samples, aggregate evaluation results, and integrate AI evaluations into Swift Testing. Using a realistic trip-planning example, the article shows how developers can reliably test non-deterministic AI features by measuring behavior statistically rather than relying on exact output matching. :contentReference[oaicite:0]{index=0}