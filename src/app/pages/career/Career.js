'use client'

import React, { useState, useRef, useEffect } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import LayoutOne from "@/components/Layout/LayoutOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import testimonialData from "@/data/testimonial/data.json";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialSeven";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json";
import DOMPurify from "dompurify";

export default function Careers() {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [applyPosition, setApplyPosition] = useState("");
  const [appliedJobId, setAppliedJobId] = useState(null);
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // New state for modal

  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  // ✅ Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://aapkiyojana.org/abnoq/welcome/getJob");
        if (!response.ok) throw new Error("Failed to fetch jobs ");
        const data = await response.json();

        setJobData(data.jobs || data); 
      } catch (err) {
        setError("Unable to load jobs at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleJobSelect = (job) => {
    setSelectedJob(selectedJob?.id === job.id ? null : job);
  };

  const handleApplyClick = (job) => {
    setApplyPosition(job.title);
    setAppliedJobId(job.id);
    setMessage(`You selected "${job.title}". Please complete the form below to apply.`);
    setShowModal(true); // Open modal instead of scrolling
    
    // Focus on name input when modal opens
    setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }, 100);
  };

  const closeModal = () => {
    setShowModal(false);
    setMessage("");
    setApplyPosition("");
    setAppliedJobId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Validation
    if (!form.name.value.trim() || !form.email.value.trim() || !form.position.value) {
      setMessage("❌ Please fill in all required fields");
      return;
    }
    
    const formData = new FormData();
    formData.append("name", form.name.value.trim());
    formData.append("email", form.email.value.trim());
    formData.append("phone", form.phone.value.trim());
    formData.append("position", form.position.value || applyPosition);
    formData.append("cover_letter", form["cover-letter"].value.trim());
  
    if (form.resume.files[0]) {
      const file = form.resume.files[0];
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setMessage("❌ Please upload a PDF or DOC file");
        return;
      }
      
      if (file.size > maxSize) {
        setMessage("❌ File size should be less than 5MB");
        return;
      }
      
      formData.append("resume", file);
    }
  
    try {
      setMessage("Uploading...");
  
      const resp = await fetch("https://aapkiyojana.org/abnoq/welcome/apply", {
        method: "POST",
        body: formData,
      });
  
      // Log response details for debugging
      console.log("Response status:", resp.status);
      console.log("Response headers:", resp.headers);
      
      // Get response text first
      const responseText = await resp.text();
      console.log("Raw response:", responseText);
      
      // Check if response is empty
      if (!responseText.trim()) {
        throw new Error("Server returned empty response");
      }
      
      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (jsonError) {
        console.error("JSON Parse Error:", jsonError);
        console.error("Response is not valid JSON:", responseText);
        
        // Check if response looks like HTML (common error page indicator)
        if (responseText.includes('<html>') || responseText.includes('<!DOCTYPE')) {
          throw new Error("Server error occurred. Please check server logs or try again later.");
        } else {
          throw new Error("Invalid server response format");
        }
      }
  
      if (data.status === "success") {
        setMessage("🎉 Application submitted successfully!");
        setAppliedJobId(null);
        setApplyPosition("");
        form.reset();
        
        // Close modal after successful submission
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else if (data.status === "error") {
        throw new Error(data.message || "Failed to submit application");
      } else {
        throw new Error("Unexpected server response");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setMessage("❌ " + (err.message || "An error occurred while submitting your application"));
    }
  };
  
  const departments = ['All', ...new Set(jobData.map(job => job.department))];
  const filteredJobs =
    filterDepartment === 'All'
      ? jobData
      : jobData.filter(job => job.department === filterDepartment);

  return (
    <LayoutOne>
      <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>

      {/* Hero Section */}
      <section className="heading-title lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] pb-8">
        <div className="container text-center">
          <h1 className="heading1">Build Your Future With Us</h1>
          <p className="text-surface1 mt-4 max-w-2xl mx-auto">
            We're more than a workplace - we're a community of innovators, creators, and problem-solvers shaping the future together.
          </p>
        </div>
      </section>

      {/* Job Listings - Now Full Width */}
      <section className="jobs-section lg:py-10 sm:py-14 py-10 border-outline">
        <div className="container">
          <div className="w-full">
            <div className="job-listings bg-white py-8 px-10 rounded-2xl shadow-xl bg-linear">
              <div className="flex justify-between items-center mb-6">
                <h4 className="heading4">Open Positions</h4>
                <select
                  className="px-4 py-2 border border-outline rounded-lg caption1"
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Loader / Error / Jobs */}
              {loading ? (
                <p className="text-center text-surface1 py-6">Loading jobs...</p>
              ) : error ? (
                <p className="text-center text-red-500 py-6">{error}</p>
              ) : (
                <div className="job-list">
                  {filteredJobs.map((job) => {
                    const cleanHtml = DOMPurify.sanitize(job.description || "");
                    return (
                      <div
                        key={job.id}
                        className={`job-item py-6 border-b border-outline cursor-pointer transition-all ${selectedJob?.id === job.id ? 'bg-gray-50' : ''}`}
                        onClick={() => handleJobSelect(job)}
                      >
                        <div className="job-header flex items-start justify-between">
                          <div className="job-info flex-1 pr-4">
                            <h5 className="heading6 text-primary mb-2">{job.title}</h5>
                            <div className="job-meta flex flex-wrap gap-4 text-sm text-surface1 mb-2">
                              <span className="flex items-center gap-1"><Icon.Buildings size={16} />{job.department}</span>
                              <span className="flex items-center gap-1"><Icon.MapPin size={16} />{job.location}</span>
                              <span className="flex items-center gap-1"><Icon.Clock size={16} />{job.type}</span>
                              <span className="flex items-center gap-1"><Icon.User size={16} />{job.experience}</span>
                            </div>
                          </div>
                          <div className="expand-icon">
                            {selectedJob?.id === job.id ? <Icon.Minus /> : <Icon.Plus />}
                          </div>
                        </div>

                        {selectedJob?.id === job.id && (
                          <div className="job-details mt-4 pt-4 border-t border-outline">
                            {/* ✅ Render job description as proper HTML */}
                            <div
                              className="prose max-w-none body3 text-secondary mb-4"
                              dangerouslySetInnerHTML={{ __html: cleanHtml }}
                            />
                            <div className="job-actions flex gap-3">
                              {appliedJobId === job.id ? (
                                <button className="px-6 py-2 border border-green-500 text-green-600 rounded-lg flex items-center gap-2 cursor-default">
                                  <Icon.Check size={18} /> Selected
                                </button>
                              ) : (
                                <button 
                                  className="button-main px-6 py-2"
                                  onClick={(e) => { e.stopPropagation(); handleApplyClick(job); }}
                                >
                                  Apply Now
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

              {filteredJobs.length === 0 && !loading && !error && (
                <div className="text-center py-8">
                  <p className="text-surface1">No positions available in this department.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Application Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 shadow-xl bg-linear max-w-4xl w-full max-h-[95vh]">
            <div className="flex justify-between items-center mb-6">
              <h4 className="heading4">Apply Now</h4>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Icon.X size={24} />
              </button>
            </div>
            
            <form className="form-block" onSubmit={handleSubmit} ref={formRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-5">
                  <div>
                    <label className="caption1 text-surface1">Full Name *</label>
                    <input 
                      ref={nameInputRef}
                      className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline" 
                      name="name" 
                      type="text" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="caption1 text-surface1">Email Address *</label>
                    <input className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline" name="email" type="email" required />
                  </div>
                  
                  <div>
                    <label className="caption1 text-surface1">Phone Number</label>
                    <input className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline" name="phone" type="tel" />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-5">
                  <div>
                    <label className="caption1 text-surface1">Position of Interest *</label>
                    <select 
                      className="w-full mt-2 pl-4 pr-12 py-3 border border-outline rounded-lg" 
                      name="position" 
                      value={applyPosition} 
                      onChange={(e) => setApplyPosition(e.target.value)}
                      required
                    >
                      <option value="">Select a position</option>
                      {jobData.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="caption1 text-surface1">Resume/CV</label>
                    <input 
                      className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline" 
                      name="resume" 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                    />
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>
              </div>

              {/* Full Width Cover Letter */}
              <div className="mt-5">
                <label className="caption1 text-surface1">Cover Letter</label>
                <textarea 
                  className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline resize-none" 
                  name="cover-letter" 
                  rows="4"
                  placeholder="Tell us why you're interested in this position..."
                ></textarea>
              </div>

              {message && (
                <p className="mt-4 text-primary font-medium text-center">{message}</p>
              )}
              
              <div className="flex gap-3 mt-6">
                <button type="submit" className="button-main flex-1 text-center">
                  Submit Application
                </button>
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="px-6 py-3 border border-outline rounded-lg text-surface1 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <CaseStudyOne classname="lg:py-20 sm:py-14 py-10 bg-linear" data={caseStudyData} start={0} limit={6} />
      <BrandOne classname="lg:pt-20 md:pt-14 pt-10 style-subpage" />
      <TestimonialOne data={testimonialData} />
    </LayoutOne>
  );
}