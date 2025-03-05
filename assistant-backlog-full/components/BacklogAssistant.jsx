import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BacklogAssistant() {
  const [description, setDescription] = useState('');
  const [output, setOutput] = useState('');

  const generateBacklog = async () => {
    if (!description) return;
    setOutput(\`User Story: Como usuário, desejo \${description}, para alcançar um objetivo específico.\`);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Assistant de Criação de Backlog
      </motion.h1>
      <textarea
        placeholder="Descreva o fluxo ou funcionalidade..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-4 w-full mb-4"
      />
      <button onClick={generateBacklog} className="bg-black text-white p-4 w-full">
        Gerar Backlog
      </button>
      {output && (
        <div className="mt-6 p-4 border bg-gray-100">
          {output}
        </div>
      )}
    </div>
  );
}