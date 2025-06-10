import { FaLocationDot } from "react-icons/fa6";
import { ImBin2 } from "react-icons/im";
import { FaTruck } from "react-icons/fa6";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { HiCalendarDateRange } from "react-icons/hi2";
import { MdPayment } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function Stepper() {
  const steps = [
    {
      id: 1,
      label: "Postcode",
      icon: FaLocationDot,
      completed: true,
      active: false,
    },
    {
      id: 2,
      label: "Waste Type",
      icon: ImBin2,
      completed: true,
      active: false,
    },
    {
      id: 3,
      label: "Select Skip",
      icon: FaTruck,
      completed: false,
      active: true,
    },
    {
      id: 4,
      label: "Permit Check",
      icon: AiOutlineSecurityScan,
      completed: false,
      active: false,
    },
    {
      id: 5,
      label: "Choose Date",
      icon: HiCalendarDateRange,
      completed: false,
      active: false,
    },
    {
      id: 6,
      label: "Payment",
      icon: MdPayment,
      completed: false,
      active: false,
    },
  ];

  const completedSteps = steps.filter((step) => step.completed).length;
  const progressPercentage = (completedSteps / (steps.length - 1)) * 100;

  return (
    <div className="w-full p-3 sm:p-4 lg:p-6 bg-white rounded-lg shadow-sm mb-6">
      <h2 className="sr-only">Steps</h2>

      <div className="block sm:hidden">
        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-center space-x-3">
                <div
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                    ${
                      step.completed
                        ? "bg-indigo-600 border-indigo-600 text-white"
                        : step.active
                        ? "bg-white border-indigo-600 text-indigo-600"
                        : "bg-white border-gray-300 text-gray-400"
                    }
                  `}
                >
                  {step.completed ? (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>

                <div className="flex-1">
                  <p
                    className={`
                      text-sm font-medium transition-colors duration-300
                      ${
                        step.completed || step.active
                          ? "text-indigo-600"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {step.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200">
            <div
              className="h-full bg-indigo-600 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <ol className="relative flex justify-between">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.id} className="flex flex-col items-center">
                  <div
                    className={`
                      relative z-10 flex items-center justify-center transition-all duration-300
                      w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 
                      rounded-full border-2
                      ${
                        step.completed
                          ? "bg-indigo-600 border-indigo-600 text-white"
                          : step.active
                          ? "bg-white border-indigo-600 text-indigo-600"
                          : "bg-white border-gray-300 text-gray-400"
                      }
                    `}
                  >
                    {step.completed ? (
                      <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    ) : (
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    )}
                  </div>

                  <span
                    className={`
                      mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-center transition-colors duration-300 max-w-16 sm:max-w-20 lg:max-w-24
                      ${
                        step.completed || step.active
                          ? "text-indigo-600"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {step.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
