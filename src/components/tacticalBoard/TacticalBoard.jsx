import React, { useState, useRef, useEffect } from 'react';

// Player marker component
const PlayerMarker = ({ id, position, color, number, isDragging, onDragStart, onDragEnd, onDrag }) => {
  const markerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  const handleMouseDown = (e) => {
    if (markerRef.current) {
      const rect = markerRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      onDragStart(id);
    }
  };
  
  const handleMouseMove = (e) => {
    if (isDragging && markerRef.current) {
      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;
      onDrag(id, { x, y });
    }
  };
  
  const handleMouseUp = () => {
    if (isDragging) {
      onDragEnd();
    }
  };
  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);
  
  return (
    <div
      ref={markerRef}
      className={`absolute w-12 h-12 rounded-full flex items-center justify-center 
                  select-none cursor-grab ${isDragging ? 'cursor-grabbing z-50' : 'z-10'}`}
      style={{
        backgroundColor: color,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        touchAction: 'none'
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
      }}
    >
      <span className="text-white font-bold text-lg">{number}</span>
    </div>
  );
};

// Main tactical board component
const TacticalBoard = () => {
  const [players, setPlayers] = useState([
    // Team A (Blue)
    { id: 'a1', position: { x: 240, y: 450 }, color: '#1E3A8A', number: 1, team: 'a' }, // GK
    { id: 'a2', position: { x: 120, y: 350 }, color: '#1E3A8A', number: 2, team: 'a' }, // RB
    { id: 'a3', position: { x: 180, y: 350 }, color: '#1E3A8A', number: 5, team: 'a' }, // CB
    { id: 'a4', position: { x: 300, y: 350 }, color: '#1E3A8A', number: 6, team: 'a' }, // CB
    { id: 'a5', position: { x: 360, y: 350 }, color: '#1E3A8A', number: 3, team: 'a' }, // LB
    { id: 'a6', position: { x: 120, y: 250 }, color: '#1E3A8A', number: 8, team: 'a' }, // CM
    { id: 'a7', position: { x: 240, y: 220 }, color: '#1E3A8A', number: 4, team: 'a' }, // CDM
    { id: 'a8', position: { x: 360, y: 250 }, color: '#1E3A8A', number: 10, team: 'a' }, // CM
    { id: 'a9', position: { x: 160, y: 150 }, color: '#1E3A8A', number: 7, team: 'a' }, // RW
    { id: 'a10', position: { x: 240, y: 120 }, color: '#1E3A8A', number: 9, team: 'a' }, // ST
    { id: 'a11', position: { x: 320, y: 150 }, color: '#1E3A8A', number: 11, team: 'a' }, // LW
    
    // Team B (Red)
    { id: 'b1', position: { x: 240, y: 50 }, color: '#DC2626', number: 1, team: 'b' }, // GK
    { id: 'b2', position: { x: 120, y: 150 }, color: '#DC2626', number: 2, team: 'b' }, // RB
    { id: 'b3', position: { x: 180, y: 150 }, color: '#DC2626', number: 5, team: 'b' }, // CB
    { id: 'b4', position: { x: 300, y: 150 }, color: '#DC2626', number: 6, team: 'b' }, // CB
    { id: 'b5', position: { x: 360, y: 150 }, color: '#DC2626', number: 3, team: 'b' }, // LB
    { id: 'b6', position: { x: 120, y: 250 }, color: '#DC2626', number: 8, team: 'b' }, // CM
    { id: 'b7', position: { x: 240, y: 280 }, color: '#DC2626', number: 4, team: 'b' }, // CDM
    { id: 'b8', position: { x: 360, y: 250 }, color: '#DC2626', number: 10, team: 'b' }, // CM
    { id: 'b9', position: { x: 160, y: 350 }, color: '#DC2626', number: 7, team: 'b' }, // RW
    { id: 'b10', position: { x: 240, y: 380 }, color: '#DC2626', number: 9, team: 'b' }, // ST
    { id: 'b11', position: { x: 320, y: 350 }, color: '#DC2626', number: 11, team: 'b' }, // LW
  ]);
  
  const [formations, setFormations] = useState([
    { name: '4-3-3', id: 'f1' },
    { name: '4-4-2', id: 'f2' },
    { name: '3-5-2', id: 'f3' },
    { name: '5-3-2', id: 'f4' },
    { name: '4-2-3-1', id: 'f5' },
  ]);
  
  const [currentFormation, setCurrentFormation] = useState('f1');
  const [draggingPlayer, setDraggingPlayer] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationPath, setAnimationPath] = useState([]);
  const boardRef = useRef(null);
  
  // Handle player drag start
  const handleDragStart = (playerId) => {
    setDraggingPlayer(playerId);
  };
  
  // Handle player drag
  const handleDrag = (playerId, position) => {
    if (boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect();
      
      // Keep the player within the board boundaries
      const x = Math.max(0, Math.min(position.x - boardRect.left, boardRect.width));
      const y = Math.max(0, Math.min(position.y - boardRect.top, boardRect.height));
      
      setPlayers(players.map(player => 
        player.id === playerId 
          ? { ...player, position: { x, y } } 
          : player
      ));
    }
  };
  
  // Handle player drag end
  const handleDragEnd = () => {
    setDraggingPlayer(null);
  };
  
  // Change formation
  const changeFormation = (formationId) => {
    setCurrentFormation(formationId);
    
    // Here you would normally adjust player positions based on the selected formation
    // For demonstration, we'll just reset to initial positions
    if (formationId === 'f2') {  // 4-4-2
      setPlayers(players.map(player => {
        if (player.team === 'a') {
          switch (player.id) {
            case 'a9': return { ...player, position: { x: 180, y: 180 } }; // Move to ST
            case 'a10': return { ...player, position: { x: 300, y: 180 } }; // Move to ST
            case 'a11': return { ...player, position: { x: 360, y: 250 } }; // Move to RM
            // Adjust other positions as needed
            default: return player;
          }
        }
        return player;
      }));
    } else if (formationId === 'f3') {  // 3-5-2
      // Implement 3-5-2 formation adjustments
      // Similar logic to the 4-4-2 example
    }
    // Add more formation adjustments as needed
  };
  
  // Start animation
  const startAnimation = () => {
    // Define an animation path (for demonstration)
    const path = [
      { x: 240, y: 350 }, // Start (CB)
      { x: 240, y: 300 },
      { x: 240, y: 250 },
      { x: 240, y: 200 },
      { x: 240, y: 150 },
      { x: 240, y: 100 } // End (Goal)
    ];
    
    setAnimationPath(path);
    setShowAnimation(true);
    
    // Animate the ball along the path
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= path.length) {
        clearInterval(interval);
        setShowAnimation(false);
      }
    }, 500);
  };
  
  // Clear all custom positions
  const resetPositions = () => {
    // Reset to default positions
    // For a real implementation, you'd store the initial positions
    window.location.reload();
  };
  
  return (
    <div className="max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-primary mb-6">Interactive Tactical Board</h2>
      
      <div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">
        <div className="w-full md:w-auto flex flex-wrap gap-2">
          {formations.map(formation => (
            <button
              key={formation.id}
              onClick={() => changeFormation(formation.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentFormation === formation.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {formation.name}
            </button>
          ))}
        </div>
        
        <div className="flex gap-2 ml-auto">
          <button
            onClick={startAnimation}
            className="px-4 py-2 bg-secondary text-primary rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
          >
            Animate Play
          </button>
          <button
            onClick={resetPositions}
            className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
      
      <div
        ref={boardRef}
        className="relative w-full h-[500px] bg-green-600 rounded-lg overflow-hidden shadow-xl"
        style={{ touchAction: 'none' }}
      >
        {/* Field markings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Center circle */}
          <div className="w-[150px] h-[150px] border-2 border-white rounded-full"></div>
          
          {/* Center line */}
          <div className="absolute w-full h-[2px] bg-white"></div>
          
          {/* Center mark */}
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        
        {/* Goal areas */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[60px] border-2 border-white"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[60px] border-2 border-white"></div>
        
        {/* Penalty areas */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[100px] border-2 border-white"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[100px] border-2 border-white"></div>
        
        {/* Penalty spots */}
        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
        
        {/* Animation path */}
        {showAnimation && (
          <>
            {/* Draw path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d={`M ${animationPath.map(p => `${p.x},${p.y}`).join(' L ')}`}
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
            
            {/* Animate ball */}
            <div
              className="absolute w-6 h-6 bg-white rounded-full shadow-md z-30"
              style={{
                left: animationPath[0].x,
                top: animationPath[0].y,
                transform: 'translate(-50%, -50%)',
                animation: `moveBall ${animationPath.length * 0.5}s linear forwards`
              }}
            ></div>
            
            {/* Keyframes for ball animation */}
            <style jsx>{`
              @keyframes moveBall {
                ${animationPath.map((point, index) => 
                  `${(index / (animationPath.length - 1)) * 100}% { left: ${point.x}px; top: ${point.y}px; }`
                ).join('\n')}
              }
            `}</style>
          </>
        )}
        
        {/* Players */}
        {players.map(player => (
          <PlayerMarker
            key={player.id}
            id={player.id}
            position={player.position}
            color={player.color}
            number={player.number}
            isDragging={draggingPlayer === player.id}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
          />
        ))}
      </div>
      
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg text-primary mb-2">How to use:</h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>Drag players to position them on the field</li>
          <li>Choose a formation using the buttons above</li>
          <li>Click "Animate Play" to see a sample attack animation</li>
          <li>Use "Reset" to return to the original layout</li>
        </ol>
        <p className="mt-4 text-sm text-gray-600">
          This tactical board is a powerful tool for coaches to demonstrate positioning, tactics, and game strategies.
          In a real application, you would be able to save formations, share them with players, and create custom animations.
        </p>
      </div>
    </div>
  );
};

export default TacticalBoard;