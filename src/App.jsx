import React, { useState } from 'react';
import { Briefcase, Sparkles, Download, Check, Loader, ArrowRight, ArrowLeft } from 'lucide-react';

export default function BusinessPlanGeniusOptimized() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [businessPlan, setBusinessPlan] = useState(null);
  
  const [formData, setFormData] = useState({
    // Page 1: Business Basics
    businessName: '',
    legalStructure: 'LLC',
    industry: '',
    subIndustry: '',
    businessStage: 'startup',
    foundingDate: '',
    
    // Page 2: Location & Operations
    businessModel: 'B2C',
    operationType: 'physical',
    primaryLocation: '',
    city: '',
    state: '',
    country: '',
    additionalLocations: '',
    operatingHours: '',
    
    // Page 3: Market & Customers
    targetMarket: '',
    customerDemographics: '',
    customerPsychographics: '',
    marketSize: '',
    marketGrowthRate: '',
    geographicReach: 'local',
    
    // Page 4: Problem & Solution
    problemStatement: '',
    currentSolutions: '',
    yourSolution: '',
    uniqueValueProp: '',
    keyFeatures: '',
    competitiveAdvantages: '',
    
    // Page 5: Competition
    directCompetitors: '',
    indirectCompetitors: '',
    competitivePositioning: '',
    barrierToEntry: '',
    
    // Page 6: Products/Services
    productServices: '',
    pricingModel: '',
    pricePoint: '',
    revenueStreams: '',
    costStructure: '',
    
    // Page 7: Marketing & Sales
    marketingChannels: '',
    salesStrategy: '',
    customerAcquisitionCost: '',
    customerLifetimeValue: '',
    conversionStrategy: '',
    brandStrategy: '',
    
    // Page 8: Operations
    keySuppliers: '',
    technology: '',
    equipment: '',
    facilities: '',
    inventory: '',
    
    // Page 9: Team
    foundersBackground: '',
    teamSize: '',
    keyRoles: '',
    advisors: '',
    hiringPlan: '',
    
    // Page 10: Financials
    fundingNeeded: '',
    fundingPurpose: '',
    currentRevenue: '',
    projectedRevenue: '',
    profitMargin: '',
    breakEvenTimeline: '',
    cashBurn: '',
    runway: '',
    
    // Page 11: Growth & Milestones
    shortTermGoals: '',
    longTermVision: '',
    scalabilityPlan: '',
    exitStrategy: '',
    keyMilestones: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateBusinessPlan = async () => {
    setLoading(true);
    
    const prompt = `You are a senior business consultant with MBA from Harvard Business School and 25+ years at McKinsey & Company, specializing in startup strategy, financial modeling, and investor relations. You have helped raise over $5 billion in venture capital and taken 50+ companies public.

Create an EXTREMELY COMPREHENSIVE, INVESTOR-READY business plan based on the following detailed information:

# BUSINESS BASICS
Business Name: ${formData.businessName}
Legal Structure: ${formData.legalStructure}
Industry: ${formData.industry}
Sub-Industry: ${formData.subIndustry}
Stage: ${formData.businessStage}
Founded: ${formData.foundingDate || 'New venture'}

# LOCATION & OPERATIONS
Business Model: ${formData.businessModel}
Operation Type: ${formData.operationType}
Primary Location: ${formData.primaryLocation}, ${formData.city}, ${formData.state}, ${formData.country}
Additional Locations: ${formData.additionalLocations || 'None'}
Operating Hours: ${formData.operatingHours || 'Standard business hours'}

# MARKET ANALYSIS
Target Market: ${formData.targetMarket}
Customer Demographics: ${formData.customerDemographics}
Customer Psychographics: ${formData.customerPsychographics}
Total Addressable Market: ${formData.marketSize}
Market Growth Rate: ${formData.marketGrowthRate}
Geographic Reach: ${formData.geographicReach}

# PROBLEM & SOLUTION
Problem Statement: ${formData.problemStatement}
Current Solutions in Market: ${formData.currentSolutions}
Our Solution: ${formData.yourSolution}
Unique Value Proposition: ${formData.uniqueValueProp}
Key Features: ${formData.keyFeatures}
Competitive Advantages: ${formData.competitiveAdvantages}

# COMPETITIVE LANDSCAPE
Direct Competitors: ${formData.directCompetitors}
Indirect Competitors: ${formData.indirectCompetitors}
Our Positioning: ${formData.competitivePositioning}
Barriers to Entry: ${formData.barrierToEntry}

# PRODUCTS/SERVICES
Offerings: ${formData.productServices}
Pricing Model: ${formData.pricingModel}
Price Point: ${formData.pricePoint}
Revenue Streams: ${formData.revenueStreams}
Cost Structure: ${formData.costStructure}

# MARKETING & SALES
Marketing Channels: ${formData.marketingChannels}
Sales Strategy: ${formData.salesStrategy}
CAC: ${formData.customerAcquisitionCost || 'TBD'}
LTV: ${formData.customerLifetimeValue || 'TBD'}
Conversion Strategy: ${formData.conversionStrategy}
Brand Strategy: ${formData.brandStrategy}

# OPERATIONS
Key Suppliers: ${formData.keySuppliers || 'TBD'}
Technology Stack: ${formData.technology || 'TBD'}
Equipment Needed: ${formData.equipment || 'TBD'}
Facilities: ${formData.facilities || 'TBD'}
Inventory Management: ${formData.inventory || 'Just-in-time'}

# TEAM
Founders' Background: ${formData.foundersBackground}
Current Team Size: ${formData.teamSize || 'Just founders'}
Key Roles Needed: ${formData.keyRoles}
Advisors/Board: ${formData.advisors || 'Being assembled'}
Hiring Plan: ${formData.hiringPlan}

# FINANCIALS
Funding Requested: ${formData.fundingNeeded}
Use of Funds: ${formData.fundingPurpose}
Current Revenue: ${formData.currentRevenue || '$0 (pre-revenue)'}
Projected Year 1 Revenue: ${formData.projectedRevenue}
Target Profit Margin: ${formData.profitMargin || 'TBD'}
Break-Even Timeline: ${formData.breakEvenTimeline}
Monthly Cash Burn: ${formData.cashBurn || 'TBD'}
Runway: ${formData.runway || 'TBD'}

# GROWTH & VISION
Short-Term Goals (6-12 months): ${formData.shortTermGoals}
Long-Term Vision (3-5 years): ${formData.longTermVision}
Scalability Plan: ${formData.scalabilityPlan}
Exit Strategy: ${formData.exitStrategy || 'Multiple strategic options'}
Key Milestones: ${formData.keyMilestones}

---

CRITICAL INSTRUCTIONS:

Create a DETAILED, PROFESSIONAL business plan with the following structure. Each section should be 500-1000 words with SPECIFIC, ACTIONABLE insights:

# EXECUTIVE SUMMARY
Write a compelling 3-4 paragraph summary that captures:
- The opportunity size and urgency
- Your unique solution and traction
- Market validation and competitive moat
- Financial highlights and funding ask
- Team credentials and track record

# 1. COMPANY DESCRIPTION
- Mission statement
- Vision for impact
- Core values
- Legal structure implications
- Location advantages
- Current stage and traction

# 2. MARKET ANALYSIS
- Total Addressable Market (TAM) with data sources
- Serviceable Addressable Market (SAM) calculation
- Serviceable Obtainable Market (SOM) projection
- Market trends and drivers (cite 3-5 specific trends)
- Customer segmentation analysis
- Market penetration strategy
- Geographic expansion roadmap

# 3. COMPETITIVE ANALYSIS
- Detailed competitor matrix (features, pricing, market share)
- SWOT analysis (be honest about weaknesses)
- Competitive positioning map
- Sustainable competitive advantages
- Market entry barriers you've created
- Innovation roadmap to stay ahead

# 4. PRODUCTS/SERVICES
- Detailed product/service descriptions
- Development roadmap with timeline
- Intellectual property strategy
- Pricing strategy with justification
- Unit economics breakdown
- Quality control processes

# 5. MARKETING & SALES STRATEGY
- Customer acquisition funnel with conversion rates
- Channel strategy (owned, earned, paid)
- Content marketing plan
- Partnership strategy
- Sales process and team structure
- Customer retention strategy
- Referral program design

# 6. OPERATIONS PLAN
- Day-to-day operations workflow
- Technology infrastructure
- Supply chain management
- Quality assurance protocols
- Risk management procedures
- Scalability considerations
- Key operational metrics (KPIs)

# 7. MANAGEMENT TEAM
- Detailed founder bios with relevant achievements
- Organizational chart (current and 12-month projection)
- Advisory board composition
- Key hires needed (titles, timeline, compensation)
- Company culture and values
- Equity distribution and vesting schedules

# 8. FINANCIAL PROJECTIONS (DETAILED)

## 8.1 Revenue Model
- Detailed unit economics
- Revenue assumptions and drivers
- Pricing strategy and elasticity

## 8.2 Three-Year Financial Forecast
Create SPECIFIC month-by-month projections for Year 1, quarterly for Years 2-3:

### Year 1 (Monthly):
- Revenue by product/service line
- Cost of Goods Sold (COGS)
- Gross Margin
- Operating Expenses:
  * Salaries & Benefits
  * Marketing & Sales
  * Technology & Software
  * Rent & Utilities
  * Professional Services
  * Insurance
  * Other
- EBITDA
- Net Income/Loss
- Cash Flow

### Years 2-3 (Quarterly):
Same structure with growth assumptions

## 8.3 Use of Funds
Detailed allocation of the ${formData.fundingNeeded} requested:
- Percentage breakdown by category
- ROI expectations for each investment
- Timeline for deployment

## 8.4 Key Financial Metrics
- Customer Acquisition Cost (CAC)
- Customer Lifetime Value (LTV)
- LTV:CAC Ratio
- Payback Period
- Gross Margin %
- Net Revenue Retention
- Rule of 40 Score

## 8.5 Break-Even Analysis
- Fixed vs Variable costs
- Break-even point (units and revenue)
- Sensitivity analysis

## 8.6 Funding Requirements
- Current funding round details
- Valuation and terms sought
- Future funding rounds anticipated
- Path to profitability

# 9. RISK ANALYSIS
Identify and address:
- Market risks (with mitigation strategies)
- Competitive risks (with defensive moats)
- Operational risks (with contingency plans)
- Financial risks (with stress testing)
- Regulatory/Legal risks (with compliance plan)
- Technology risks (with backup systems)
- Key person risks (with succession planning)

# 10. MILESTONES & ROADMAP
Create a detailed 24-month roadmap with:
- Product development milestones
- Customer acquisition targets
- Revenue milestones
- Team expansion milestones
- Partnership milestones
- Funding milestones
- Exit/next-stage milestones

# 11. APPENDICES
- Market research data and sources
- Customer testimonials/letters of intent
- Product screenshots/mockups
- Competitive analysis details
- Team member resumes
- Financial model assumptions
- Legal documents summary

---

FORMATTING REQUIREMENTS:
- Use professional business language
- Include specific numbers and percentages
- Cite data sources where applicable
- Be realistic but optimistic
- Address potential investor concerns proactively
- Make it clear this is a ${formData.operationType} ${formData.businessModel} business in ${formData.city}, ${formData.state}
- Tailor industry-specific insights for ${formData.industry}
- If physical location, address foot traffic, demographics, competition in the area
- If online, address digital marketing, SEO, customer acquisition strategies

Make this a world-class business plan that could actually secure funding from top-tier VCs or banks.`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 16000,
          messages: [
            { role: "user", content: prompt }
          ]
        })
      });

      const data = await response.json();
      const planText = data.content[0].text;
      
      setBusinessPlan(planText);
      setCurrentPage(12); // Final page
    } catch (error) {
      console.error("Error generating business plan:", error);
      alert("There was an error generating your business plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadPlan = () => {
    const element = document.createElement("a");
    const file = new Blob([businessPlan], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.businessName.replace(/\s+/g, '_')}_Business_Plan_Comprehensive.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, 12));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const renderFormPage = () => {
    const inputStyle = {
      width: '100%',
      padding: '0.75rem',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      fontFamily: 'inherit',
      transition: 'border-color 0.3s'
    };

    const labelStyle = {
      display: 'block',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#1a1a1a'
    };

    const textareaStyle = {
      ...inputStyle,
      minHeight: '100px',
      resize: 'vertical'
    };

    switch(currentPage) {
      case 1:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Business Basics
            </h2>
            
            <div>
              <label style={labelStyle}>Business Name *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="e.g., Donuts Delice, TechStart Solutions"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Legal Structure *</label>
              <select
                name="legalStructure"
                value={formData.legalStructure}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="LLC">LLC</option>
                <option value="Corporation">Corporation (C-Corp)</option>
                <option value="S-Corporation">S-Corporation</option>
                <option value="Partnership">Partnership</option>
                <option value="Nonprofit">Nonprofit</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Industry *</label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., Food & Beverage"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Sub-Industry</label>
                <input
                  type="text"
                  name="subIndustry"
                  value={formData.subIndustry}
                  onChange={handleInputChange}
                  placeholder="e.g., QSR, Bakery"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Business Stage *</label>
                <select
                  name="businessStage"
                  value={formData.businessStage}
                  onChange={handleInputChange}
                  style={inputStyle}
                >
                  <option value="idea">Idea Stage</option>
                  <option value="startup">Startup (Pre-Revenue)</option>
                  <option value="early">Early Stage (Revenue)</option>
                  <option value="growth">Growth Stage</option>
                  <option value="established">Established</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Founding Date</label>
                <input
                  type="date"
                  name="foundingDate"
                  value={formData.foundingDate}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Location & Operations
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Business Model *</label>
                <select
                  name="businessModel"
                  value={formData.businessModel}
                  onChange={handleInputChange}
                  style={inputStyle}
                >
                  <option value="B2C">B2C (Business to Consumer)</option>
                  <option value="B2B">B2B (Business to Business)</option>
                  <option value="B2B2C">B2B2C</option>
                  <option value="Marketplace">Marketplace</option>
                  <option value="Subscription">Subscription</option>
                  <option value="Franchise">Franchise</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Operation Type *</label>
                <select
                  name="operationType"
                  value={formData.operationType}
                  onChange={handleInputChange}
                  style={inputStyle}
                >
                  <option value="physical">Physical Store/Location</option>
                  <option value="online">Online Only</option>
                  <option value="hybrid">Hybrid (Physical + Online)</option>
                  <option value="mobile">Mobile/Delivery</option>
                  <option value="service">Service-Based</option>
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Primary Address *</label>
              <input
                type="text"
                name="primaryLocation"
                value={formData.primaryLocation}
                onChange={handleInputChange}
                placeholder="e.g., 123 Main Street"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="e.g., Cotonou"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>State/Region</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State/Region"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="e.g., Benin"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Additional Locations (if any)</label>
              <textarea
                name="additionalLocations"
                value={formData.additionalLocations}
                onChange={handleInputChange}
                placeholder="List any other locations, expansion plans, or multi-city presence"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Operating Hours</label>
              <input
                type="text"
                name="operatingHours"
                value={formData.operatingHours}
                onChange={handleInputChange}
                placeholder="e.g., Mon-Fri 9am-6pm, or 24/7 online"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Market & Customers
            </h2>
            
            <div>
              <label style={labelStyle}>Target Market Description *</label>
              <textarea
                name="targetMarket"
                value={formData.targetMarket}
                onChange={handleInputChange}
                placeholder="Who are your ideal customers? Be very specific."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Customer Demographics *</label>
              <textarea
                name="customerDemographics"
                value={formData.customerDemographics}
                onChange={handleInputChange}
                placeholder="Age range, income level, education, occupation, family status, etc."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Customer Psychographics *</label>
              <textarea
                name="customerPsychographics"
                value={formData.customerPsychographics}
                onChange={handleInputChange}
                placeholder="Values, interests, lifestyle, pain points, buying behavior, motivations"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Total Market Size (TAM)</label>
                <input
                  type="text"
                  name="marketSize"
                  value={formData.marketSize}
                  onChange={handleInputChange}
                  placeholder="e.g., $50B globally, 10M potential customers"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Market Growth Rate</label>
                <input
                  type="text"
                  name="marketGrowthRate"
                  value={formData.marketGrowthRate}
                  onChange={handleInputChange}
                  placeholder="e.g., 15% annually"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Geographic Reach *</label>
              <select
                name="geographicReach"
                value={formData.geographicReach}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="local">Local (City/Town)</option>
                <option value="regional">Regional (State/Province)</option>
                <option value="national">National</option>
                <option value="continental">Continental (e.g., Pan-African)</option>
                <option value="global">Global</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Problem & Solution
            </h2>
            
            <div>
              <label style={labelStyle}>Problem Statement *</label>
              <textarea
                name="problemStatement"
                value={formData.problemStatement}
                onChange={handleInputChange}
                placeholder="What specific pain point are you solving? Why does this problem matter?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Current Solutions in Market</label>
              <textarea
                name="currentSolutions"
                value={formData.currentSolutions}
                onChange={handleInputChange}
                placeholder="How are people solving this problem today? What's inadequate about existing solutions?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
               );
              
      case 5:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Competitive Landscape
            </h2>

            <div>
              <label style={labelStyle}>Direct Competitors *</label>
              <textarea
                name="directCompetitors"
                value={formData.directCompetitors}
                onChange={handleInputChange}
                placeholder="List your main direct competitors and briefly describe what they offer."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Indirect Competitors</label>
              <textarea
                name="indirectCompetitors"
                value={formData.indirectCompetitors}
                onChange={handleInputChange}
                placeholder="Who else competes for your customer’s money or attention (even if not directly in your niche)?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
            <div>
              <label style={labelStyle}>Our Positioning *</label>
              <textarea
                name="competitivePositioning"
                value={formData.competitivePositioning}
                onChange={handleInputChange}
                placeholder="How do you position yourself versus competitors? Cheaper, faster, premium, niche, more convenient, etc."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
            
            <div>
               );
              
      case 6:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Products & Services
            </h2>

            <div>
              <label style={labelStyle}>Core Offerings *</label>
              <textarea
                name="productServices"
                value={formData.productServices}
                onChange={handleInputChange}
                placeholder="Describe your main products/services, versions, tiers, or packages."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Pricing Model *</label>
                <input
                  type="text"
                  name="pricingModel"
                  value={formData.pricingModel}
                  onChange={handleInputChange}
                  placeholder="Subscription, one-time, freemium, usage-based, etc."
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Typical Price Point</label>
                <input
                  type="text"
                  name="pricePoint"
                  value={formData.pricePoint}
                  onChange={handleInputChange}
                  placeholder="e.g., $29/month, $299 per package"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Revenue Streams *</label>
              <textarea
                name="revenueStreams"
                value={formData.revenueStreams}
                onChange={handleInputChange}
                placeholder="List all ways you make money (subscriptions, upsells, consulting, ads, etc.)"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Cost Structure</label>
              <textarea
                name="costStructure"
                value={formData.costStructure}
                onChange={handleInputChange}
                placeholder="Main fixed and variable costs (rent, payroll, marketing, COGS, licenses, etc.)"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
               );
              
    case 7:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Marketing & Sales Strategy
            </h2>

            <div>
              <label style={labelStyle}>Marketing Channels *</label>
              <textarea
                name="marketingChannels"
                value={formData.marketingChannels}
                onChange={handleInputChange}
                placeholder="Social media, SEO, paid ads, partnerships, email, influencers, events, etc."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Sales Strategy *</label>
              <textarea
                name="salesStrategy"
                value={formData.salesStrategy}
                onChange={handleInputChange}
                placeholder="How do you convert leads into paying customers? (funnels, demos, calls, self-serve, etc.)"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Customer Acquisition Cost (CAC)</label>
                <input
                  type="text"
                  name="customerAcquisitionCost"
                  value={formData.customerAcquisitionCost}
                  onChange={handleInputChange}
                  placeholder="If known, how much do you spend to acquire one customer?"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Customer Lifetime Value (LTV)</label>
                <input
                  type="text"
                  name="customerLifetimeValue"
                  value={formData.customerLifetimeValue}
                  onChange={handleInputChange}
                  placeholder="Estimated revenue per customer over their lifetime."
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Conversion Strategy</label>
              <textarea
                name="conversionStrategy"
                value={formData.conversionStrategy}
                onChange={handleInputChange}
                placeholder="How do you move people from awareness → interest → purchase?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Brand Strategy</label>
              <textarea
                name="brandStrategy"
                value={formData.brandStrategy}
                onChange={handleInputChange}
                placeholder="How do you want your brand to be perceived? Positioning, tone, visual identity."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
               );
              
      case 8:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Operations & Infrastructure
            </h2>

            <div>
              <label style={labelStyle}>Key Suppliers</label>
              <textarea
                name="keySuppliers"
                value={formData.keySuppliers}
                onChange={handleInputChange}
                placeholder="Main suppliers or service providers you rely on (raw materials, tech vendors, logistics, etc.)."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Technology Stack</label>
              <textarea
                name="technology"
                value={formData.technology}
                onChange={handleInputChange}
                placeholder="Key software, platforms, and tools used to run the business."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Equipment Needed</label>
              <textarea
                name="equipment"
                value={formData.equipment}
                onChange={handleInputChange}
                placeholder="Any major equipment or physical assets needed."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Facilities</label>
              <textarea
                name="facilities"
                value={formData.facilities}
                onChange={handleInputChange}
                placeholder="Offices, warehouses, stores, kitchens, etc."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Inventory / Operations Approach</label>
              <textarea
                name="inventory"
                value={formData.inventory}
                onChange={handleInputChange}
                placeholder="How do you manage inventory, fulfillment, and daily operations?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
               );
              
      case 9:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Team & Organization
            </h2>

            <div>
              <label style={labelStyle}>Founders' Background *</label>
              <textarea
                name="foundersBackground"
                value={formData.foundersBackground}
                onChange={handleInputChange}
                placeholder="Summarize founders’ experience, track record, and why they are uniquely suited for this venture."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Current Team Size</label>
                <input
                  type="text"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 founders, 3 full-time employees, 2 contractors"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Key Roles Needed</label>
                <input
                  type="text"
                  name="keyRoles"
                  value={formData.keyRoles}
                  onChange={handleInputChange}
                  placeholder="What key roles do you still need to hire for?"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Advisors / Board</label>
              <textarea
                name="advisors"
                value={formData.advisors}
                onChange={handleInputChange}
                placeholder="Any mentors, advisors, or board members supporting the business."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Hiring Plan</label>
              <textarea
                name="hiringPlan"
                value={formData.hiringPlan}
                onChange={handleInputChange}
                placeholder="Who will you hire and when over the next 12–24 months?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Culture & Values</label>
              <textarea
                name="cultureValues"
                value={formData.cultureValues}
                onChange={handleInputChange}
                placeholder="What kind of culture do you want to build? Core values, principles, and working style."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
               );
              
      case 10:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Financial Snapshot
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Funding Needed *</label>
                <input
                  type="text"
                  name="fundingNeeded"
                  value={formData.fundingNeeded}
                  onChange={handleInputChange}
                  placeholder="e.g., $150,000 seed round, $1M Series A"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Target Profit Margin</label>
                <input
                  type="text"
                  name="profitMargin"
                  value={formData.profitMargin}
                  onChange={handleInputChange}
                  placeholder="e.g., 20–30% net margin at scale"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Use of Funds *</label>
              <textarea
                name="fundingPurpose"
                value={formData.fundingPurpose}
                onChange={handleInputChange}
                placeholder="How exactly will you use the funds? (product, marketing, hiring, inventory, etc.)"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Break-Even Timeline</label>
                <input
                  type="text"
                  name="breakEvenTimeline"
                  value={formData.breakEvenTimeline}
                  onChange={handleInputChange}
                  placeholder="When do you expect to become profitable?"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              <div>
                <label style={labelStyle}>Monthly Cash Burn</label>
                <input
                  type="text"
                  name="cashBurn"
                  value={formData.cashBurn}
                  onChange={handleInputChange}
                  placeholder="Roughly how much cash do you burn per month?"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Runway</label>
              <input
                type="text"
                name="runway"
                value={formData.runway}
                onChange={handleInputChange}
                placeholder="How many months of runway do you have at current burn?"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
              <label style={labelStyle}>Barriers to Entry</label>
              <textarea
                name="barrierToEntry"
                value={formData.barrierToEntry}
                onChange={handleInputChange}
                placeholder="What makes it hard for others to copy you? (capital, tech, brand, relationships, regulation, IP, etc.)"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>

              <label style={labelStyle}>Your Solution *</label>
              <textarea
                name="yourSolution"
                value={formData.yourSolution}
                onChange={handleInputChange}
                placeholder="How does your product/service solve this problem?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Unique Value Proposition *</label>
              <textarea
                name="uniqueValueProp"
                value={formData.uniqueValueProp}
                onChange={handleInputChange}
                placeholder="What makes your solution unique? Why you and not someone else?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Key Features/Benefits</label>
              <textarea
                name="keyFeatures"
                value={formData.keyFeatures}
                onChange={handleInputChange}
                placeholder="List the main features and customer benefits"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Competitive Advantages *</label>
              <textarea
                name="competitiveAdvantages"
                value={formData.competitiveAdvantages}
                onChange={handleInputChange}
                placeholder="Patents, technology, partnerships, expertise, network effects, etc."
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        );

      // Continue with cases 5-11... (I'll abbreviate for space, but would include all)
      
      case 11:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>
              Growth & Milestones
            </h2>
            
            <div>
              <label style={labelStyle}>Short-Term Goals (6-12 months) *</label>
              <textarea
                name="shortTermGoals"
                value={formData.shortTermGoals}
                onChange={handleInputChange}
                placeholder="What are your immediate goals?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Long-Term Vision (3-5 years) *</label>
              <textarea
                name="longTermVision"
                value={formData.longTermVision}
                onChange={handleInputChange}
                placeholder="Where do you see the company in 3-5 years?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Scalability Plan *</label>
              <textarea
                name="scalabilityPlan"
                value={formData.scalabilityPlan}
                onChange={handleInputChange}
                placeholder="How will you scale operations, enter new markets, or expand product lines?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Exit Strategy</label>
              <textarea
                name="exitStrategy"
                value={formData.exitStrategy}
                onChange={handleInputChange}
                placeholder="IPO, acquisition, private equity, lifestyle business? Or staying private?"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label style={labelStyle}>Key Milestones *</label>
              <textarea
                name="keyMilestones"
                value={formData.keyMilestones}
                onChange={handleInputChange}
                placeholder="List major milestones with target dates (product launch, revenue goals, team expansion, etc.)"
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        );

      default:
        return <div>Page {currentPage}</div>;
    }
  };

  // Main render
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
        padding: '3rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            fontSize: '2.5rem'
          }}>
            💼
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Business Plan Genius Pro
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
            Enterprise-grade business plans that secure funding
          </p>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
            color: '#6b7280'
          }}>
            <span>Page {currentPage} of 11</span>
            <span>{Math.round((currentPage / 11) * 100)}% Complete</span>
          </div>
          <div style={{
            height: '8px',
            background: '#e5e7eb',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${(currentPage / 11) * 100}%`,
              background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
              transition: 'width 0.3s'
            }} />
          </div>
        </div>

        {/* Form pages */}
        {currentPage <= 11 ? (
          <>
            {renderFormPage()}
            
            {/* Navigation buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              {currentPage > 1 && (
                <button
                  onClick={prevPage}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    background: 'white',
                    color: '#FFD700',
                    border: '2px solid #FFD700',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ArrowLeft size={20} />
                  Back
                </button>
              )}
              
              {currentPage < 11 ? (
                <button
                  onClick={nextPage}
                  style={{
                    flex: 2,
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Continue
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={generateBusinessPlan}
                  disabled={loading}
                  style={{
                    flex: 2,
                    padding: '1rem',
                    background: loading ? '#9ca3af' : 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {loading ? (
                    <>
                      <Loader className="spinning" size={20} />
                      Generating Plan...
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} />
                      Generate Business Plan
                    </>
                  )}
                </button>
              )}
            </div>
          </>
        ) : (
          // Results page
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                Your Comprehensive Business Plan
              </h2>
              <button
                onClick={downloadPlan}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #00E5FF 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Download size={20} />
                Download
              </button>
            </div>

            <div style={{
              background: '#f9fafb',
              padding: '2rem',
              borderRadius: '12px',
              marginBottom: '2rem',
              maxHeight: '600px',
              overflowY: 'auto',
              border: '1px solid #e5e7eb'
            }}>
              <pre style={{
                whiteSpace: 'pre-wrap',
                fontFamily: 'Georgia, serif',
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: '#1a1a1a'
              }}>
                {businessPlan}
              </pre>
            </div>

            <button
              onClick={() => {
                setCurrentPage(1);
                setBusinessPlan(12);
              }}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'white',
                color: '#FFD700',
                border: '2px solid #FFD700',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Create Another Plan
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinning {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
