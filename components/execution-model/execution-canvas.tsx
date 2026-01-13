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

const stepStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: 12,
  padding: 12,
  width: 160,
  fontSize: 13,
  fontWeight: 600,
  textAlign: "center" as const,
};

const resultStyle = {
  ...stepStyle,
  background: "hsl(var(--muted) / 0.4)",
};

const initialNodes = [
  {
    id: "trigger",
    position: { x: 0, y: 160 },
    data: { label: "Workflow Trigger\n(Manual / Cron)" },
    style: stepStyle,
  },
  {
    id: "task",
    position: { x: 220, y: 160 },
    data: { label: "Task Created\n(Immutable)" },
    style: stepStyle,
  },
  {
    id: "step1",
    position: { x: 440, y: 80 },
    data: { label: "Step 1\nLLM" },
    style: stepStyle,
  },
  {
    id: "step2",
    position: { x: 660, y: 80 },
    data: { label: "Step 2\nHTTP" },
    style: stepStyle,
  },
  {
    id: "step3",
    position: { x: 880, y: 80 },
    data: { label: "Step 3\nTool" },
    style: stepStyle,
  },
  {
    id: "success",
    position: { x: 1100, y: 80 },
    data: { label: "Task Completed" },
    style: resultStyle,
  },
  {
    id: "failure",
    position: { x: 660, y: 260 },
    data: { label: "Task Failed\n(Execution Stops)" },
    style: {
      ...resultStyle,
      border: "1px solid hsl(var(--destructive))",
    },
  },
];

const initialEdges = [
  {
    id: "t1",
    source: "trigger",
    target: "task",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "t2",
    source: "task",
    target: "step1",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "t3",
    source: "step1",
    target: "step2",
    animated: true,
    label: "success",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "t4",
    source: "step2",
    target: "step3",
    animated: true,
    label: "success",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "t5",
    source: "step3",
    target: "success",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "fail",
    source: "step2",
    target: "failure",
    label: "failure",
    style: { strokeDasharray: "6 4" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

export function ExecutionCanvas() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [ edges, ,onEdgesChange ] = useEdgesState(initialEdges);

  return (
    <div className="h-[520px] w-full rounded-xl border border-border bg-card/40">
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
        <Background gap={16} size={1} />
        {/* <Controls /> */}
      </ReactFlow>
    </div>
  );
}
