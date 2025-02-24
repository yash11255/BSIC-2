import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SuccessStoryModalProps {
  story: {
    name: string;
    video: string;
    description: string;
    funding: string;
    users: string;
    growth: string;
    team: string[];
    impact: string;
  } | null;
  onClose: () => void;
}

export default function SuccessStoryModal({ story, onClose }: SuccessStoryModalProps) {
  if (!story) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">{story.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="aspect-video w-full">
            <iframe
              src={story.video}
              title={`${story.name} video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-[#AC7E4F] font-bold text-xl">{story.funding}</div>
                <div className="text-sm text-gray-600">Funding Raised</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-[#AC7E4F] font-bold text-xl">{story.users}</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-[#AC7E4F] font-bold text-xl">{story.growth}</div>
                <div className="text-sm text-gray-600">YoY Growth</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">About the Startup</h3>
              <p className="text-gray-600">{story.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-600">{story.impact}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Team</h3>
              <div className="flex flex-wrap gap-2">
                {story.team.map((member, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
