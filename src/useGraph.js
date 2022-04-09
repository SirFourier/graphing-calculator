import { useRef, useEffect } from "react";
import GraphCanvas from "./GraphCanvas";

export default function useGraph() {
  const canvasRef = useRef(null);
  const graphRef = useRef(new GraphCanvas());
  const graph = graphRef.current;

  useEffect(() => {
    graph.set(canvasRef.current);
    graph.clear();
  });

  return [graph, canvasRef];
}
