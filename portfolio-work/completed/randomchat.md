# RandomChat

## Status
COMPLETED

## Portfolio Readiness
PORTFOLIO READY

## Category
Product / Real-Time System

## One-Line Description
Anonymous-by-default, instant peer-to-peer text and voice web platform executing edge matchmaking on Cloudflare Workers and Durable Objects.

## Problem
Modern chat networks require permanent phone numbers, email authentication, and track persistent user graphs. Conversely, legacy anonymous chat sites suffer from bot spam, bloated UI, and centralized server bottlenecks.

## What I Built
A production web platform that matches anonymous strangers in low-latency ephemeral rooms entirely within memory on Cloudflare's global edge network. Includes distinct browse ("People") and match ("Random Chat") modalities and reciprocal mutual-consent WebRTC voice unlocks.

## My Role
Full-Stack Systems Engineer & Product Designer

## Tools / Technologies
TypeScript, Astro, Cloudflare Workers, Cloudflare Durable Objects, WebSockets, WebRTC, Tailwind CSS, Vitest

## Key Features
- Zero-database ephemeral session lifecycle; no accounts, cookies, or user tracking
- Distributed room coordination and matchmaking queues via Cloudflare Durable Objects
- Low-latency full-duplex WebSocket communication
- Mutual-consent voice request unlock flow requiring reciprocal permissions
- Mobile-first responsive dark mode interface

## Evidence
- Production codebase at `E:\01_WORK\Websites\onlinechat`
- Live deployed web application at `https://randomcaht.online`
- Full Product Requirements Document (`randomcaht_online_PRD(1).md`) and Architecture Spec (`randomcaht_online_ARCHITECTURE(2).md`)
- Architecture diagrams (`randomchat-architecture.svg`, `randomchat-matching-flow.svg`)
- Vitest automated test suite (`tests/`)
- 4 production UI screenshots in `public/assets/projects/randomchat/screens/`

## Public Links
- Live Product: https://randomcaht.online
- GitHub Repository: https://github.com/kanishkroy-X/onlinechat

## Portfolio Notes
Serves as Flagship Pillar 01 (Systems & Real-Time Engineering) on the portfolio homepage and dedicated case study page (`/work/randomchat`).

## Missing Evidence
None. Project is fully shipped, documented, and verified in production.
