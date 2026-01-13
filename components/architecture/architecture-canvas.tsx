"use client";

import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

/* -----------------------------
   Shared Styles
------------------------------ */

const baseNodeStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: 14,
  padding: 14,
  width: 190,
  fontSize: 13,
  fontWeight: 600,
  whiteSpace: "pre-line",
  textAlign: "center" as const,
};

const subNodeStyle = {
  ...baseNodeStyle,
  background: "hsl(var(--muted) / 0.4)",
  width: 170,
  fontWeight: 500,
};

const annotationStyle = {
  background: "transparent",
  border: "none",
  width: 260,
  fontSize: 12,
  lineHeight: 1.5,
  color: "hsl(var(--muted-foreground))",
};

/* -----------------------------
   Initial Nodes
------------------------------ */

const initialNodes = [
  {
    id: "client",
    position: { x: 0, y: 180 },
    data: { label: "Client\n(Dashboard / API)" },
    style: baseNodeStyle,
  },
  {
    id: "api",
    position: { x: 260, y: 180 },
    data: { label: "REST API\n(Express)" },
    style: baseNodeStyle,
  },
  {
    id: "engine",
    position: { x: 540, y: 180 },
    data: { label: "Workflow Engine" },
    style: baseNodeStyle,
  },
  {
    id: "runner",
    position: { x: 540, y: 320 },
    data: { label: "Agent Runner" },
    style: subNodeStyle,
  },
  {
    id: "executor",
    position: { x: 540, y: 440 },
    data: { label: "Step Executor" },
    style: subNodeStyle,
  },
  {
    id: "scheduler",
    position: { x: 820, y: 320 },
    data: { label: "Scheduler\n(Cron)" },
    style: subNodeStyle,
  },
  {
    id: "db",
    position: { x: 900, y: 180 },
    data: { label: "MongoDB\n(State & Logs)" },
    style: baseNodeStyle,
  },

  /* ---- Annotations ---- */
  {
    id: "note-api",
    position: { x: 230, y: 90 },
    data: {
      label:
        "Validates input, persists state,\nand triggers execution.\n\nNever runs workflow logic.",
    },
    draggable: false,
    selectable: false,
    style: annotationStyle,
  },
  {
    id: "note-engine",
    position: { x: 520, y: 80 },
    data: {
      label:
        "Deterministic execution core.\nNo hidden retries.\nNo implicit state.",
    },
    draggable: false,
    selectable: false,
    style: annotationStyle,
  },
];

/* -----------------------------
   Initial Edges
------------------------------ */

const initialEdges = [
  {
    id: "client-api",
    source: "client",
    target: "api",
    animated: true,
    label: "requests / triggers",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "api-engine",
    source: "api",
    target: "engine",
    animated: true,
    label: "task creation",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "engine-db",
    source: "engine",
    target: "db",
    label: "persist state",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "engine-runner",
    source: "engine",
    target: "runner",
    label: "step orchestration",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "runner-executor",
    source: "runner",
    target: "executor",
    label: "execute step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "scheduler-engine",
    source: "scheduler",
    target: "engine",
    label: "time-based trigger",
    animated: true,
    style: { strokeDasharray: "6 4" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

/* -----------------------------
   Canvas Component
------------------------------ */

export default function ArchitectureCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[600px] w-full rounded-xl border border-border bg-card/40">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        panOnDrag
        nodesDraggable
        nodesConnectable={false}
        zoomOnScroll={false}
      >
        <Background gap={18} size={1} />
        {/* <Controls /> */}
      </ReactFlow>
    </div>
  );
}
